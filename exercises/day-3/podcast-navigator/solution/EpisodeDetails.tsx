import { Link, useParams } from 'react-router-dom'
import { EPISODES } from './constants'

export default function EpisodeDetails() {
  const { id } = useParams()
  const episode = EPISODES.find((ep) => ep.id === id)

  if (!episode) {
    return (
      <div className="episode-details">
        <p>Episode not found.</p>
        <Link to="/" className="back-link">Back to browse</Link>
      </div>
    )
  }

  return (
    <div className="episode-details">
      <Link to="/" className="back-link">Back to browse</Link>

      <article className="episode-card episode-card-large">
        <h1>{episode.title}</h1>
        <p className="episode-host">Hosted by: {episode.host}</p>
        <p className="episode-description">{episode.description}</p>
      </article>
    </div>
  )
}
