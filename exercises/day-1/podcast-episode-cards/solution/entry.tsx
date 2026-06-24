import { meta } from './constants'
import EpisodeCard from './EpisodeCard'
import Preview from './Preview'
import '../EpisodeCard.css'

export { meta }

const episodes = [
  { title: 'The Art of Focus', host: 'Dan Chen' },
  { title: 'Deep Work Habits', host: 'James Clear' },
]

export default function PodcastEpisodeCardsSolution() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your episode cards</h3>
        <div className="exercise-preview-shell episode-grid">
          <EpisodeCard title={episodes[0].title} host={episodes[0].host} />
          <EpisodeCard title={episodes[1].title} host={episodes[1].host} />
        </div>
      </section>
    </div>
  )
}
