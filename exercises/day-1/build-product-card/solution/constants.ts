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
  'ProductTitle.tsx: returns an <h2> with a ridiculous product name like "Invisible Umbrella 3000".',
  'ProductImage.tsx: returns an <img> tag with any placeholder URL, or just an emoji unicorn.',
  'ProductPrice.tsx: returns a <p> with an absurd price like "Only $9,999,999.99".',
]

export const solutionHint = "Create a ProductCard component with 3 sub-components and sell the world's most ridiculous product."

export const solvedProduct = {
  title: 'Wireless Headphones',
  description: 'Noise-cancelling over-ear headphones with a 30-hour battery life.',
  price: '$129',
}