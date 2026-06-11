export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to review</p>
        <code className="exercise-file-path">exercises/day-3-part-2/zustand-counter/solution/entry.tsx</code>
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
