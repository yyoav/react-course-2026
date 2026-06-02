import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card/solution',
  title: 'Build a Product Card',
  description: 'Completed version of the Day 1 component exercise.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'solution',
  order: 2,
}

export const solutionTasks = [
  'Move the hard-coded product data into a props object.',
  'Render the image, title, description, and price.',
  'Render the action button under the price.',
]

export const solutionHint = 'Hint: start with a single root element and pass product data through props.'

export const solvedProduct = {
  title: 'Wireless Headphones',
  description: 'Noise-cancelling over-ear headphones with a 30-hour battery life.',
  price: '$129',
}