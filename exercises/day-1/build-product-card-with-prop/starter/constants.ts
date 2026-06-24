import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card-with-prop/starter',
  title: 'Build a Product Card with Props',
  description: 'Starter shell – pass product data via props and wire up a button.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 3,
}

export const starterTasks = [
  'Pass product data as props from ProductCard to children components.',
  'Add an onClick handler to the button that logs the product title.',
]

