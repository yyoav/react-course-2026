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
  'ProductTitle.tsx: returns an <h2> with a product name.',
  'ProductDescription.tsx: returns a <p> with a product description.',
  'ProductPrice.tsx: returns a <p> with a price.',
]

export const solutionHint = 'Create a ProductCard component with 3 sub-components.'
