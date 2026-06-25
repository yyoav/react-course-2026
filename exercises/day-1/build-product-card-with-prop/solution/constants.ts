import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card-with-prop/solution',
  title: 'Build a Product Card with Props',
  description: 'Completed version – product data passed via props with a working button.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'solution',
  order: 3,
}

export const solutionTasks = [
  'Pass product data as props from ProductCard to children components.',
  'Add an onClick handler to the button that logs the product title.',
]


