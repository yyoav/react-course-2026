import { useState } from 'react'
import type { CourseTargetMeta } from '../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/demo/vite-basics',
  title: 'Vite Basics',
  description: 'A small Day 1 demo for HMR, JSX editing, and fast feedback.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'demo',
  variant: 'demo',
  order: 1,
}

export default function ViteBasicsDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="lesson-surface">
      <section className="lesson-card exercise-header-card">
        <div className="exercise-header-copy">
          <p className="eyebrow">Day 1 demo</p>
          <h2 className="exercise-title">Vite Basics</h2>
        </div>

        <div className="exercise-task-block exercise-task-block-inline">
          <p className="eyebrow">What to try</p>
          <strong>Fast feedback loop</strong>
          <div className="task-list">
            <p>Click the counter button and watch state update immediately.</p>
            <p>Edit this file and confirm Vite refreshes the demo without restarting.</p>
            <p>Use this target during the setup walkthrough to show the shared course runtime.</p>
          </div>
        </div>
      </section>

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Live result</p>
        <h3>Demo workspace</h3>
        <div className="exercise-preview-shell">
          <div className="demo-preview-layout">
            <article className="stat-box demo-preview-card">
              <p className="eyebrow">Hot reload</p>
              <strong>HMR ready</strong>
              <p>Change JSX or text in this file and Vite updates the browser in place.</p>
            </article>

            <article className="stat-box demo-preview-card">
              <p className="eyebrow">State</p>
              <strong>Interactive counter</strong>
              <p>The same runtime can host small demos and larger exercises.</p>
              <button className="demo-button" type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
                Demo clicks: {count}
              </button>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}