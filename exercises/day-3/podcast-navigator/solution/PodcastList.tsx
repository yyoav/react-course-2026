import { Link } from 'react-router-dom'
import { EPISODES } from './constants'
import EpisodeCard from './EpisodeCard'

export default function PodcastList() {
  return (
    <div className="podcast-list">
      <h1 className="podcast-list-heading">Podcast Episodes</h1>

      <div className="episode-list">
        {EPISODES.map((episode) => (
          <Link key={episode.id} to={`/episode/${episode.id}`} className="episode-link">
            <EpisodeCard title={episode.title} host={episode.host} />
          </Link>
        ))}
      </div>
    </div>
  )
}
