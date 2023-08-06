package reposense.authorship.model;

import java.time.LocalDateTime;
import java.util.Objects;

import reposense.model.Author;

/**
 * Stores the information of a line in a {@link FileInfo}.
 */
public class LineInfo {
    private int lineNumber;
    private Author author;
    private String content;
    private LocalDateTime lastModifiedDate;
    private boolean isFullCredit;

    private transient boolean isTracked;

    public LineInfo(int lineNumber, String content) {
        this.lineNumber = lineNumber;
        this.content = content;

        isTracked = true;
        isFullCredit = false;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public int getLineNumber() {
        return lineNumber;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(LocalDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public boolean isTracked() {
        return isTracked;
    }

    public void setTracked(boolean isTracked) {
        this.isTracked = isTracked;
    }

    public boolean isFullCredit() {
        return isFullCredit;
    }

    public void setIsFullCredit(boolean isFullCredit) {
        this.isFullCredit = isFullCredit;
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }

        if (!(other instanceof LineInfo)) {
            return false;
        }

        LineInfo otherLineInfo = (LineInfo) other;
        return lineNumber == otherLineInfo.lineNumber
                && Objects.equals(author, otherLineInfo.author)
                && content.equals(otherLineInfo.content)
                && isTracked == otherLineInfo.isTracked
                && ((lastModifiedDate == null && otherLineInfo.lastModifiedDate == null)
                || (lastModifiedDate != null && otherLineInfo.lastModifiedDate != null
                && lastModifiedDate.equals(otherLineInfo.lastModifiedDate)))
                && isFullCredit == otherLineInfo.isFullCredit;
    }
}
