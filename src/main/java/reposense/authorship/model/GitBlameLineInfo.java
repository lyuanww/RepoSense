package reposense.authorship.model;

import reposense.model.Author;

/**
 * Stores the git blame info of a single line.
 */
public class GitBlameLineInfo {
    private final String commitHash;
    private final Author author;
    private final long timestampMilliseconds;

    public GitBlameLineInfo(String commitHash, Author author, long timestampMilliseconds) {
        this.commitHash = commitHash;
        this.author = author;
        this.timestampMilliseconds = timestampMilliseconds;
    }

    public String getCommitHash() {
        return commitHash;
    }

    public Author getAuthor() {
        return author;
    }

    public long getTimestampMilliseconds() {
        return timestampMilliseconds;
    }
}