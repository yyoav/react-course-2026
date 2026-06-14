import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/remote-and-screen/starter',
  title: 'The Remote and the Screen',
  description: 'Starter exercise for lifting state up between sibling components.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 3,
}

export const starterTasks = [
  'Lift the screen status state into the App component.',
  'Pass the current status down to Screen as a prop.',
  'Pass a toggle handler down to RemoteControl and wire it to the button.',
]

export const starterHint = 'Practice lifting state up by letting the parent control the TV status and sharing it with both children.'
