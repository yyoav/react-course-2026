import { starterTasks } from './constants'

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to edit</p>
        <code className="exercise-file-path">exercises/day-3/podcast-navigator/starter/entry.tsx</code>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>Build a multi-page Podcast Navigator with React Router</strong>
        <div className="task-list">
          {starterTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
