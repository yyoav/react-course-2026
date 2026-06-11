import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/remote-and-screen/solution',
  title: 'The Remote and the Screen',
  description: 'Completed exercise showing how to lift state up between sibling components.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'solution',
  order: 3,
}

export const solutionTasks = [
  'App owns the shared status state.',
  'Screen receives the current status via props.',
  'RemoteControl receives a callback prop and toggles the state.',
]

export const solutionHint = 'The parent owns the shared state, then passes data and event handlers down to each child as props.'
