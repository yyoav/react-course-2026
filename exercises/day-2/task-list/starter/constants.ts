import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-2/exercises/task-list/starter",
  title: "Task List with Completion Status",
  description: "Render a list of tasks with completion status.",
  dayOrder: 2,
  dayLabel: "Day 2",
  kind: "exercise",
  variant: "starter",
  order: 1,
};

export const starterTasks = [
  "Create an array of tasks with structure: { id, title, done }",
  "Use .map() to iterate over the tasks array",
  "Render each task in a <li> element with a key prop",
];

export const starterHint =
  "Remember: Each item in a list needs a unique key prop, and you can use a ternary operator to show different icons based on the done property.";
