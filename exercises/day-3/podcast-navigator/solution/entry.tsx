import '../PodcastNavigator.css'
import { meta } from './constants'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import PodcastList from './PodcastList'
import EpisodeDetails from './EpisodeDetails'

export { meta }

export default function PodcastNavigatorSolution() {
  return (
    <div className="lesson-surface">
      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Solution</p>
        <h3>Podcast Navigator</h3>
        <div className="exercise-preview-shell">
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<PodcastList />} />
              <Route path="/episode/:id" element={<EpisodeDetails />} />
            </Routes>
          </MemoryRouter>
        </div>
      </section>
    </div>
  )
}
