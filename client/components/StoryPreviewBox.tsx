// Displays a preview for a story
// Will need to take props which we can later use to .map a number of these components with different data from the api.


interface StoryPreviewBoxProps {
  title: string
  summary: string
  date: string
  url: string
}

function StoryPreviewBox({ title, summary, date, url }: StoryPreviewBoxProps) {
  return (
    <article className="story-preview">
      <h2 className="story-title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p className="story-date">{date}</p>
      <p className="story-summary">{summary}</p>
    </article>
  )
}

export default StoryPreviewBox