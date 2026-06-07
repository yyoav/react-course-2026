import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-3-part-2/exercises/zustand-counter/starter',
  title: 'Zustand Counter: Add Decrease',
  description: 'Add a decrease operation to the Zustand counter store.',
  dayOrder: 4,
  dayLabel: 'Day 3 - part 2',
  kind: 'exercise',
  variant: 'starter',
  order: 1,
}

export const starterTasks = [
  'Add a "decrease" action to the counter store.',
  'Add a "Decrease" button that calls the decrease action.',
  'Test that both increment and decrease work correctly.',
]

export const starterHint = 'Hint: Follow the same pattern as increment, but subtract 1 instead of adding.'
