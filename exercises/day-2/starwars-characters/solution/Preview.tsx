export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Solution</p>
        <h2 className="exercise-title">Fetch and Render a List</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>StarWarsCharacters.tsx</strong>
        <p className="product-meta">
          ✅ Fetch data from the Star Wars API
          <br />
          ✅ Display characters in a table
          <br />
          ✅ Add search functionality with useEffect dependency
          <br />
          ✅ Show loading state while fetching
          <br />✅ Handle empty results gracefully
        </p>
      </div>
    </section>
  );
}
