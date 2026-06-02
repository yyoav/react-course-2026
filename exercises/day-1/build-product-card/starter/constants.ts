import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card/starter',
  title: 'Build a Product Card',
  description: 'Starter shell for the Day 1 component exercise.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 2,
}

export const starterTasks = [
  'Move the hard-coded product data into a props object.',
  'Render the image, title, description, and price.',
  'Render the action button under the price.',
]

export const starterHint = 'Hint: start with a single root element and pass product data through props.'