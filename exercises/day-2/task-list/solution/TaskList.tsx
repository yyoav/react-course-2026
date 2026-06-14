const tasks = [
  { id: 1, title: "Learn React", done: true },
  { id: 2, title: "Read Docs", done: false },
  { id: 3, title: "Build Project", done: false },
];

export default function TaskList() {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.done ? "✅" : "⬜"}
        </li>
      ))}
    </ul>
  );
}
