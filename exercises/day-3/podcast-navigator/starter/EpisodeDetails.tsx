// TODO: Import useParams and Link from 'react-router-dom'
import { EPISODES } from './constants'

export default function EpisodeDetails() {
  // TODO: Use the useParams hook to read the episode id from the URL
  const id = undefined

  const episode = EPISODES.find((ep) => ep.id === id)

  if (!episode) {
    return (
      <div className="episode-details">
        <p>Episode not found.</p>
        {/* TODO: Replace the anchor below with a Link that navigates back to the list page */}
        <a href="/">Back to browse</a>
      </div>
    )
  }

  return (
    <div className="episode-details">
      {/* TODO: Replace the anchor below with a Link that navigates back to the list page */}
      <a href="/">Back to browse</a>

      <article className="episode-card episode-card-large">
        <h1>{episode.title}</h1>
        <p className="episode-host">Hosted by: {episode.host}</p>
        <p className="episode-description">{episode.description}</p>
      </article>
    </div>
  )
}
