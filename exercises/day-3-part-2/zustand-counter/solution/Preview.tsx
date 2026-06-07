export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Solution</p>
        <h2 className="exercise-title">Zustand Counter: Add Decrease</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>useCounterStore.ts & Counter.tsx</strong>
        <p className="product-meta">
          ✅ Added decrease action to the store<br/>
          ✅ Added Decrease button to the Counter component<br/>
          ✅ Both increment and decrease work correctly
        </p>
      </div>
    </section>
  )
}
