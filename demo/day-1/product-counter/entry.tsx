import type { CourseTargetMeta } from '../../../src/course.ts'
import ProductCard from './ProductCard'

export const meta: CourseTargetMeta = {
  id: 'day-1/demo/product-counter',
  title: 'Product Counter',
  description: 'A product card with an Add to Cart button that increments a counter using useState.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'demo',
  variant: 'demo',
  order: 1,
}

export default function ProductCounterDemo() {
  return (
    <div className="lesson-surface">
      <section className="lesson-card exercise-header-card">
        <div className="exercise-header-copy">
          <p className="eyebrow">File to review</p>
          <code className="exercise-file-path">demo/day-1/product-counter/ProductCard.tsx</code>
        </div>
      </section>

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Day 1 demo</p>
        <h3>Product Counter</h3>
        <div className="exercise-preview-shell">
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
