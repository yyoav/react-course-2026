import { starterHint, starterTasks } from "./constants";

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Starter</p>
        <h2 className="exercise-title">Task List with Completion Status</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Expected Result</p>
        <div
          style={{
            maxWidth: "400px",
            margin: "20px auto",
          }}
        >
          <div
            style={{
              padding: "0.75rem 1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Learn React</span>
            <span>✅</span>
          </div>
          <div
            style={{
              padding: "0.75rem 1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Read Docs</span>
            <span>⬜</span>
          </div>
          <div
            style={{
              padding: "0.75rem 1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Build Project</span>
            <span>⬜</span>
          </div>
        </div>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>TaskList.tsx</strong>
        <div className="task-list">
          {starterTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
        <p className="product-meta">{starterHint}</p>
      </div>
    </section>
  );
}
