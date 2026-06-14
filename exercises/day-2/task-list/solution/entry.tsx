import { meta } from "./constants";
import Preview from "./Preview";
import TaskList from "./TaskList";
import "./TaskList.css";

export { meta };

export default function TaskListSolution() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your task list</h3>
        <div className="exercise-preview-shell">
          <TaskList />
        </div>
      </section>
    </div>
  );
}
