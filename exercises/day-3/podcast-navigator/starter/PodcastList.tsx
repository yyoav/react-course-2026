// TODO: Import Link from 'react-router-dom'
import { EPISODES } from './constants'
import EpisodeCard from './EpisodeCard'

export default function PodcastList() {
  return (
    <div className="podcast-list">
      <h1 className="podcast-list-heading">Podcast Episodes</h1>

      <div className="episode-list">
        {EPISODES.map((episode) => (
          // TODO: Wrap each EpisodeCard in a Link that navigates to the episode details page
          <EpisodeCard key={episode.id} title={episode.title} host={episode.host} />
        ))}
      </div>
    </div>
  )
}
