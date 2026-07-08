import '../PodcastNavigator.css'
import { meta } from './constants'
import Preview from './Preview'
import { MemoryRouter } from 'react-router-dom'
// Note: We use MemoryRouter instead of BrowserRouter here because the course
// runner already uses the real browser URL for navigation (?target=...).
// MemoryRouter keeps routing state in memory, so it won't conflict with
// the outer page. In a real app you would use BrowserRouter instead.

export { meta }

export default function PodcastNavigatorStarter() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your podcast navigator</h3>
        <div className="exercise-preview-shell">
          <MemoryRouter>
            {/* TODO: Add a Routes block here with two Route elements:
                  one for the list page at "/" and one for the details page at "/episode/:id" */}
          </MemoryRouter>
        </div>
      </section>
    </div>
  )
}
