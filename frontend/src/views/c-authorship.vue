<template lang="pug">
#authorship
  h2
    .panel-title
      span Code Panel
    .toolbar--multiline
      a(
        v-if="activeFilesCount < selectedFiles.length",
        @click="toggleAllFileActiveProperty(true)"
      ) show all file details
      a(v-if="activeFilesCount > 0", @click="toggleAllFileActiveProperty(false)") hide all file details
  .panel-heading
    a.group-name(
      :href="info.location", target="_blank",
      :title="'Click to open the repo'"
    ) {{ info.repo }}
    .author(v-if="!info.isMergeGroup")
      span &#8627; &nbsp;
      span {{ authorDisplayName }} ({{ info.author }})
    .period
      span &#8627; &nbsp;
      span {{ info.minDate }} to {{ info.maxDate }}
        |&nbsp;&nbsp; ({{ selectedFiles.length }} files changed)
  .title
    .contribution(v-if="isLoaded && info.files.length!=0")
      .sorting.mui-form--inline
        .mui-select.sort-by
          select(v-model="filesSortType")
            option(value="linesOfCode") LoC
            option(value="path") Path
            option(value="fileName") File Name
            option(value="fileType") File Type
          label sort by
        .mui-select.sort-order
          select(v-model="toReverseSortFiles")
            option(:value='true') Descending
            option(:value='false') Ascending
          label order
      .searchbox
        input.radio-button--search(
          type="radio",
          value="search",
          v-model="filterType",
          @change="indicateSearchBar"
        )
        .mui-form--inline
          input#search(
            type="search",
            placeholder="Filter by glob",
            ref="searchBar",
            :value="searchBarValue",
            @keyup.enter="indicateSearchBar(); updateSearchBarValue();"
          )
          button#submit-button(
            type="button",
            @click="indicateSearchBar(); updateSearchBarValue();"
          ) Filter
      .fileTypes
        input.radio-button--checkbox(
          type="radio",
          value="checkboxes",
          v-model="filterType",
          @change="indicateCheckBoxes"
        )
        c-file-type-checkboxes(
          :file-types="fileTypes",
          :file-type-colors="fileTypeColors",
          v-model:selected-file-types="selectedFileTypes",
          @update:selected-file-types="indicateCheckBoxes",
          :all-checkbox-label="allCheckboxLabel",
          :file-type-checkbox-labels="checkboxLabels"
        )
        .checkboxes.mui-form--inline
          label.binary-fileType(v-if="binaryFilesCount > 0")
            input.mui-checkbox--fileType(type="checkbox", v-model="isBinaryChecked")
            span(
              :title="`${binaryFilesCount} \
              binary files (not included in total line count)`"
            )
              span {{ binaryFilesCount }} binary file(s)
          label.ignored-fileType(v-if="ignoredFilesCount > 0")
            input.mui-checkbox--fileType(type="checkbox", v-model="isIgnoredChecked")
            span(
              :title="`${ignoredFilesCount} \
              ignored files (included in total line count)`"
            )
              span {{ ignoredFilesCount }} ignored file(s)

  .background-color-legend(v-if="isAuthorshipAnalyzed")
    .bold Legend:
    .color-circle.full-credit-color(:class="{'isMergeGroup': info.isMergeGroup}")
    span [darker shades] Mostly contributed by author.
    .color-circle.partial-credit-color(:class="{'isMergeGroup': info.isMergeGroup}")
    span [lighter shades] Contributed by author, with non-trivial contribution from others.

  .files(v-if="isLoaded")
    .empty(v-if="info.files.length === 0") nothing to see here :(
    template(v-for="(file, index) in selectedFiles", :key="file.path")
      c-authorship-file(:file="file", :index="index",
        :files-sort-type="this.filesSortType", :info="this.info",
        :author-colors="this.authorColors", :file-type-colors="this.fileTypeColors",
        @toggle-file-active-property="toggleFileActiveProperty")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import { minimatch } from 'minimatch';
import brokenLinkDisabler from '../mixin/brokenLinkMixin';
import cAuthorshipFile from '../components/c-authorship-file.vue';
import cFileTypeCheckboxes from '../components/c-file-type-checkboxes.vue';
import getNonRepeatingColor from '../utils/random-color-generator';
import { StoreState } from '../types/vuex.d';
import { FileResult, Line } from '../types/zod/authorship-type';
import { AuthorshipFile, AuthorshipFileSegment, SegmentState } from '../types/types';
import { FilesSortType, FilterType } from '../types/authorship';

const filesSortDict = {
  linesOfCode: (file: AuthorshipFile): number => file.lineCount,
  path: (file: AuthorshipFile): string => file.path,
  fileName: (file: AuthorshipFile): string => file.path.split(/[/]+/).pop() || '',
  fileType: (file: AuthorshipFile): string => file.fileType,
};

function authorshipInitialState(): {
  isLoaded: boolean,
  selectedFiles: Array<AuthorshipFile>,
  filterType: FilterType,
  selectedFileTypes: Array<string>,
  fileTypes: Array<string>,
  filesLinesObj: { [key: string]: number },
  fileTypeBlankLinesObj: { [key: string]: number },
  filesSortType: FilesSortType,
  toReverseSortFiles: boolean,
  isBinaryFilesChecked: boolean,
  isIgnoredFilesChecked: boolean,
  searchBarValue: string,
  authorDisplayName: string,
  authors: Set<string>,
  selectedColors: Array<string>
} {
  return {
    isLoaded: false,
    selectedFiles: [] as Array<AuthorshipFile>,
    filterType: FilterType.Checkboxes,
    selectedFileTypes: [] as Array<string>,
    fileTypes: [] as Array<string>,
    filesLinesObj: {} as { [key: string]: number },
    fileTypeBlankLinesObj: {} as { [key: string]: number },
    filesSortType: FilesSortType.LinesOfCode,
    toReverseSortFiles: true,
    isBinaryFilesChecked: false,
    isIgnoredFilesChecked: false,
    searchBarValue: window.hashParams.filteredFileName??"",
    authorDisplayName: '',
    authors: new Set<string>(),
    selectedColors: ['#1e90ff', '#f08080', '#00ff7f', '#ffd700', '#ba55d3', '#adff2f', '#808000', '#800000',
      '#ff8c00', '#c71585'],
  };
}

const repoCache: Array<string> = [];

export default defineComponent({
  name: 'c-authorship',
  components: {
    cAuthorshipFile,
    cFileTypeCheckboxes,
  },
  mixins: [brokenLinkDisabler],
  emits: [
    'deactivate-tab',
  ],
  data(): {
    isLoaded: boolean,
    selectedFiles: Array<AuthorshipFile>,
    filterType: FilterType,
    selectedFileTypes: Array<string>,
    fileTypes: Array<string>,
    filesLinesObj: { [key: string]: number },
    fileTypeBlankLinesObj: { [key: string]: number },
    filesSortType: FilesSortType,
    toReverseSortFiles: boolean,
    isBinaryFilesChecked: boolean,
    isIgnoredFilesChecked: boolean,
    searchBarValue: string,
    authorDisplayName: string,
    authors: Set<string>,
    selectedColors: Array<string>
  } {
    return authorshipInitialState();
  },

  computed: {
    sortingFunction() {
      return (a: AuthorshipFile, b: AuthorshipFile): number => (this.toReverseSortFiles ? -1 : 1)
        * window.comparator(filesSortDict[this.filesSortType])(a, b);
    },

    isBinaryChecked: {
      get(): boolean {
        return this.isBinaryFilesChecked;
      },
      set(value: boolean): void {
        if (value) {
          this.isBinaryFilesChecked = true;
        } else {
          this.isBinaryFilesChecked = false;
        }

        this.updateSelectedFiles();
        this.indicateCheckBoxes();
      },
    },

    isIgnoredChecked: {
      get(): boolean {
        return this.isIgnoredFilesChecked;
      },
      set(value: boolean): void {
        if (value) {
          this.isIgnoredFilesChecked = true;
        } else {
          this.isIgnoredFilesChecked = false;
        }

        this.updateSelectedFiles();
        this.indicateCheckBoxes();
      },
    },

    activeFilesCount(): number {
      return this.selectedFiles.filter((file) => file.active).length;
    },

    totalLineCount(): number {
      return Object.values(this.fileTypeLinesObj).reduce((acc, val) => acc + val, 0);
    },

    totalBlankLineCount(): number {
      return Object.values(this.fileTypeBlankLinesObj).reduce((acc, val) => acc + val, 0);
    },

    fileTypeLinesObj(): { [key: string]: number } {
      const numLinesModified: { [key: string]: number } = {};
      Object.entries(this.filesLinesObj)
        .filter(([, value]) => value > 0)
        .forEach(([langType, value]) => {
          numLinesModified[langType] = value;
        });
      return numLinesModified;
    },

    binaryFilesCount(): number {
      return this.info.files.filter((file) => file.isBinary).length;
    },

    ignoredFilesCount(): number {
      return this.info.files.filter((file) => file.isIgnored).length;
    },

    allCheckboxLabel(): {
      fileTitle: string,
      fileType: string,
      lineCount: number,
      blankLineCount: number,
    } {
      return this.getCheckboxDetails('Total', 'All', this.totalLineCount, this.totalBlankLineCount);
    },

    checkboxLabels(): Array<{
      fileTitle: string,
      fileType: string,
      lineCount: number,
      blankLineCount: number,
    }> {
      return this.fileTypes.map(
        (fileType) => this.getCheckboxDetails(
          fileType,
          fileType,
          this.fileTypeLinesObj[fileType],
          this.fileTypeBlankLinesObj[fileType],
        ),
      );
    },

    ...mapState({
      fileTypeColors: (state: unknown) => (state as StoreState).fileTypeColors,
      info: (state: unknown) => (state as StoreState).tabAuthorshipInfo,
      authorColors: (state: unknown) => (state as StoreState).tabAuthorColors,
    }),

    isAuthorshipAnalyzed(): boolean {
      return window.isAuthorshipAnalyzed;
    },
  },

  watch: {
    filesSortType(): void {
      window.addHash('authorshipSortBy', this.filesSortType);
      window.encodeHash();
      this.updateSelectedFiles();
    },

    searchBarValue(): void {
      this.updateSelectedFiles();
    },

    selectedFileTypes: {
      deep: true,
      handler() {
        this.updateSelectedFiles();
      },
    },

    toReverseSortFiles(): void {
      window.addHash('reverseAuthorshipOrder', this.toReverseSortFiles);
      window.encodeHash();
      this.updateSelectedFiles();
    },

    info(): void {
      Object.assign(this.$data, authorshipInitialState());
      this.initiate();
    },
  },

  created(): void {
    this.initiate();
  },

  beforeUnmount(): void {
    this.removeAuthorshipHashes();
  },

  methods: {
    retrieveHashes(): void {
      const hash = window.hashParams;

      switch (hash.authorshipSortBy) {
      case FilesSortType.Path:
      case FilesSortType.FileName:
      case FilesSortType.FileType:
        this.filesSortType = hash.authorshipSortBy;
        break;
      default:
      // Invalid value, use the default value of 'linesOfCode'
      }

      this.toReverseSortFiles = hash.reverseAuthorshipOrder !== 'false';

      if (hash.filteredFileName) {
        this.indicateSearchBar();
        this.searchBarValue = hash.authorshipFilesGlob?? hash.filteredFileName;
        if (!(hash.authorshipFilesGlob)) {
          window.addHash("authorshipFilesGlob", hash.filteredFileName);
        }
      }

      if (hash.authorshipFileTypes) {
        this.selectedFileTypes = hash.authorshipFileTypes
          .split(window.HASH_DELIMITER)
          .filter((fileType) => this.fileTypes.includes(fileType));
      } else {
        this.resetSelectedFileTypes();
      }

      if (hash.authorshipIsBinaryFileTypeChecked) {
        this.isBinaryFilesChecked = hash.authorshipIsBinaryFileTypeChecked === 'true';
      }

      if (hash.authorshipIsIgnoredFilesChecked) {
        this.isIgnoredFilesChecked = hash.authorshipIsIgnoredFilesChecked === 'true';
      }
    },

    resetSelectedFileTypes(): void {
      this.selectedFileTypes = this.info.checkedFileTypes
        ? this.info.checkedFileTypes.filter((fileType) => this.fileTypes.includes(fileType))
        : [];
    },

    setInfoHash(): void {
      const { addHash } = window;
      // We only set these hashes as they are propagated from summary_charts
      addHash('tabAuthor', this.info.author);
      addHash('tabRepo', this.info.repo);
      addHash('authorshipIsMergeGroup', this.info.isMergeGroup);
      this.updateFileTypeHash();
      if (window.hashParams.filteredFileName) {
        addHash('authorshipFilesGlob', window.hashParams.filteredFileName);
        this.searchBarValue = window.hashParams.filteredFileName;
        this.indicateSearchBar();
      }
    },

    removeAuthorshipHashes(): void {
      window.removeHash('authorshipFileTypes');
      window.removeHash('authorshipIsBinaryFileTypeChecked');
      window.removeHash('authorshipIsIgnoredFilesChecked');
      window.removeHash('authorshipFilesGlob');
      window.removeHash('authorshipSortBy');
      window.removeHash('reverseAuthorshipOrder');
      window.removeHash('tabAuthor');
      window.removeHash('tabRepo');
      window.removeHash('authorshipIsMergeGroup');
      window.encodeHash();
    },

    async initiate(): Promise<void> {
      const repo = window.REPOS[this.info.repo];

      if (!repo || !this.info.author) {
        this.$store.commit('updateTabState', false);
        return;
      }
      if (repoCache.length === 2) {
        const toRemove = repoCache.shift();
        if (toRemove && toRemove !== this.info.repo) {
          delete window.REPOS[toRemove].files;
        }
      }
      repoCache.push(this.info.repo);

      let { files } = repo;
      if (!files) {
        files = await window.api.loadAuthorship(this.info.repo);
      }

      const author = repo.users?.find((user) => user.name === this.info.author);
      if (author) {
        this.authorDisplayName = author.displayName;
      }

      this.processFiles(files);

      if (this.info.isRefresh) {
        this.retrieveHashes();
      } else {
        this.resetSelectedFileTypes();
      }

      this.setInfoHash();
    },

    getAuthors(file: AuthorshipFile): Array<string | null> {
      return Array.from(new Set(file.segments?.map((segment) => segment.knownAuthor)
        .filter(Boolean))).sort().slice(0, 50);
    },

    toggleAllFileActiveProperty(isActive: boolean): void {
      this.$store.commit('setAllAuthorshipFileActiveProperty', { isActive, files: this.selectedFiles });
    },

    toggleFileActiveProperty(file: AuthorshipFile): void {
      this.$store.commit('toggleAuthorshipFileActiveProperty', file);
    },

    isUnknownAuthor(name: string): boolean {
      return name === '-';
    },

    splitSegments(lines: Array<Line>): { segments: Array<AuthorshipFileSegment>; blankLineCount: number; } {
      // split into segments separated by knownAuthor
      const lastState : SegmentState = { id: -1, author: null, isFullCredit: true };
      const segments: Array<AuthorshipFileSegment> = [];
      let blankLineCount = 0;

      lines.forEach((line, lineCount) => {
        const isAuthorMatched = this.info.isMergeGroup
          ? !this.isUnknownAuthor(line.author.gitId)
          : line.author.gitId === this.info.author;
        const knownAuthor = (line.author && isAuthorMatched) ? line.author.gitId : null;
        const isFullCredit = line.isFullCredit;

        if (lastState.id === -1 || lastState.author !== knownAuthor
            || (knownAuthor && lastState.isFullCredit !== isFullCredit)) {
          segments.push({
            knownAuthor,
            isFullCredit,
            lineNumbers: [],
            lines: [],
          });

          lastState.id += 1;
          lastState.author = knownAuthor;
          lastState.isFullCredit = isFullCredit;
        }

        const content = line.content || ' ';
        segments[lastState.id].lines.push(content);
        segments[lastState.id].lineNumbers.push(lineCount + 1);

        if (line.content === '' && knownAuthor) {
          blankLineCount += 1;
        }

        if (knownAuthor) {
          this.authors.add(knownAuthor);
        }
      });

      return {
        segments,
        blankLineCount,
      };
    },

    assignAuthorColors(): void {
      let authorColorIndex = 0;
      const authorColors: { [key: string]: string } = {};
      if (this.info.isMergeGroup) {
        this.authors.forEach((author) => {
          if (authorColorIndex < this.selectedColors.length) {
            authorColors[author] = this.selectedColors[authorColorIndex];
            authorColorIndex += 1;
          } else {
            authorColors[author] = getNonRepeatingColor(Object.values(authorColors));
          }
        });
      }
      this.$store.commit('updateAuthorColors', authorColors);
    },

    processFiles(files: Array<FileResult>): void {
      const SINGLE_FILE_LINE_COUNT_THRESHOLD = 2000;
      const SINGLE_FILE_CHAR_COUNT_THRESHOLD = 1000000;
      const res: Array<AuthorshipFile> = [];
      const fileTypeBlanksInfoObj: { [key: string]: number } = {};

      files.filter((file) => this.isValidFile(file)).forEach((file) => {
        const contributionMap = file.authorContributionMap;

        const lineCnt = this.info.isMergeGroup
          ? this.getContributionFromAllAuthors(contributionMap)
          : contributionMap[this.info.author];

        const out: AuthorshipFile = {
          path: file.path,
          lineCount: lineCnt,
          active: lineCnt <= SINGLE_FILE_LINE_COUNT_THRESHOLD && !file.isBinary,
          wasCodeLoaded: lineCnt <= SINGLE_FILE_LINE_COUNT_THRESHOLD,
          fileType: file.fileType,
          isIgnored: !!file.isIgnored,
          isBinary: !!file.isBinary,
        };

        if (this.filesLinesObj[out.fileType]) {
          this.filesLinesObj[out.fileType] += lineCnt;
        } else {
          this.filesLinesObj[out.fileType] = lineCnt;
        }

        if (!out.isBinary && !out.isIgnored) {
          out.charCount = file.lines.reduce(
            (count, line) => count + (line ? line.content.length : 0),
            0,
          );
        }

        if (!file.isBinary) {
          const segmentInfo = this.splitSegments(file.lines);
          out.segments = segmentInfo.segments;
          out.blankLineCount = segmentInfo.blankLineCount;

          this.addBlankLineCount(file.fileType, segmentInfo.blankLineCount, fileTypeBlanksInfoObj);
        }

        res.push(out);
      });

      res.sort((a, b) => b.lineCount - a.lineCount).forEach((file) => {
        // hide files over total char count limit
        if (!file.isIgnored && !file.isBinary && file.active && file.charCount !== undefined) {
          file.active = file.charCount <= SINGLE_FILE_CHAR_COUNT_THRESHOLD;
          file.wasCodeLoaded = file.active;
        }
      });

      Object.keys(this.filesLinesObj).forEach((file) => {
        if (this.filesLinesObj[file] !== 0) {
          this.fileTypes.push(file);
        }
      });

      this.assignAuthorColors();
      this.fileTypeBlankLinesObj = fileTypeBlanksInfoObj;
      this.$store.commit('updateTabAuthorshipFiles', res);
      this.updateSelectedFiles(true);
    },

    isValidFile(file: FileResult): boolean {
      return this.info.isMergeGroup
        ? Object.entries(file.authorContributionMap)
          .some((authorCount) => !this.isUnknownAuthor(authorCount[0]))
        : this.info.author in file.authorContributionMap;
    },

    getContributionFromAllAuthors(contributionMap: Record<string, number>): number {
      return Object.entries(contributionMap).reduce((acc, [author, cnt]) => (
        (!this.isUnknownAuthor(author) ? acc + cnt : acc)
      ), 0);
    },

    addBlankLineCount(fileType: string, lineCount: number, filesInfoObj: { [key: string]: number }): void {
      if (!filesInfoObj[fileType]) {
        filesInfoObj[fileType] = 0;
      }

      filesInfoObj[fileType] += lineCount;
    },

    updateSearchBarValue(): void {
      this.searchBarValue = (this.$refs.searchBar as HTMLInputElement).value;

      window.addHash('authorshipFilesGlob', this.searchBarValue);
      window.removeHash('authorshipFileTypes');
      window.removeHash('authorshipIsBinaryFileTypeChecked');
      window.removeHash('authorshipIsIgnoredFilesChecked');
      window.encodeHash();
    },

    updateFileTypeHash(): void {
      const fileTypeHash = this.selectedFileTypes.length > 0
        ? this.selectedFileTypes.reduce((a, b) => `${a}~${b}`)
        : '';

      window.addHash('authorshipFileTypes', fileTypeHash);
      window.addHash('authorshipIsBinaryFileTypeChecked', this.isBinaryFilesChecked);
      window.addHash('authorshipIsIgnoredFilesChecked', this.isIgnoredFilesChecked);
      window.removeHash('authorshipFilesGlob');
      window.encodeHash();
    },

    async updateSelectedFiles(setIsLoaded = false): Promise<void> {
      await this.$store.dispatch('incrementLoadingOverlayCountForceReload', 1);
      this.selectedFiles = this.info.files.filter(
        (file) => ((this.selectedFileTypes.includes(file.fileType) && !file.isBinary && !file.isIgnored)
          || (file.isBinary && this.isBinaryFilesChecked) || (file.isIgnored && this.isIgnoredFilesChecked))
          && minimatch(file.path, this.searchBarValue || '*', { matchBase: true, dot: true }),
      )
        .sort(this.sortingFunction);
      if (setIsLoaded) {
        this.isLoaded = true;
      }
      await this.$store.dispatch('incrementLoadingOverlayCountForceReload', -1);
    },

    indicateSearchBar(): void {
      this.selectedFileTypes = this.fileTypes.slice();
      this.isBinaryFilesChecked = true;
      this.isIgnoredFilesChecked = true;
      this.filterType = FilterType.Search;
    },

    indicateCheckBoxes(): void {
      this.searchBarValue = '';
      this.filterType = FilterType.Checkboxes;
      this.updateFileTypeHash();
    },

    getCheckboxDetails(fileTitle: string, fileType: string, lineCount: number, blankLineCount: number): {
      fileTitle: string,
      fileType: string,
      lineCount: number,
      blankLineCount: number,
    } {
      return {
        fileTitle,
        fileType,
        lineCount,
        blankLineCount,
      };
    },
  },
});
</script>

<style lang="scss">
@import '../styles/_colors.scss';
@import '../styles/z-indices.scss';

/* Authorship */
#tab-authorship {
  .title {
    .contribution {
      .radio-button--search {
        float: left;
        margin: 1.75rem 2.0rem 0 0;
      }

      .radio-button--checkbox {
        float: left;
        margin: 0 2.0rem 0 0;
        vertical-align: middle;
      }

      .mui-form--inline {
        @include small-font;
        align-items: flex-end;
        display: flex;
        flex-wrap: wrap;

        #search {
          @include small-font;
          margin-top: 1.25rem;
          min-width: 130px;
          padding: .5rem 1.0rem .25rem 1.0rem;
          width: 70%;
        }

        #submit-button {
          @include small-font;
          background-color: mui-color('blue');
          color: mui-color('white');
          margin: 1.0rem 0 0 .25rem;
          padding: .5rem 1.0rem .25rem 1.0rem;
        }
      }

      .searchbox {
        margin-bottom: 1em;
      }

      .select {
        font-weight: bold;
      }

      .loc {
        font-weight: bolder;
      }

      .mui-checkbox--fileType {
        vertical-align: middle;
      }

      .binary-fileType {
        background-color: mui-color('white');
        color: mui-color('grey', '800');
      }

      .ignored-fileType {
        background-color: mui-color('white');
        color: mui-color('grey', '800');
      }
    }
  }

  .files {
    clear: left;
  }

  .empty {
    text-align: center;
  }

  .background-color-legend {
    align-items: center;
    display: flex;
    flex-direction: row;

    .bold {
      font-weight: bold;
    }

    .color-circle {
      border: 1px solid lightgrey;
      border-radius: 50%;
      margin-left: 5px;
      margin-right: 5px;
      min-height: 15px;
      min-width: 15px;
    }

    .full-credit-color {
      background-color: mui-color('github', 'full-authored-code-background');

      &.isMergeGroup {
        background-color: mui-color('grey', '400');
      }
    }

    .partial-credit-color {
      background-color: mui-color('github', 'partial-authored-code-background');

      &.isMergeGroup {
        background-color: mui-color('grey', '200');
      }
    }
  }
}
</style>
