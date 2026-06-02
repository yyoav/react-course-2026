import { solutionHint, solutionTasks } from './constants'

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Solution</p>
        <h2 className="exercise-title">Build a Product Card</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>ProductCard.tsx</strong>
        <div className="task-list">
          {solutionTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
        <p className="product-meta">{solutionHint}</p>
      </div>
    </section>
  )
}