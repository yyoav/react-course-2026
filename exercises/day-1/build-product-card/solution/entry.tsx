import { solvedProduct, meta } from './constants'
import ProductCard from './ProductCard'
import Preview from './Preview'

export { meta }

export default function BuildProductCardSolution() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your product card</h3>
        <div className="exercise-preview-shell">
          <ProductCard
            title={solvedProduct.title}
            description={solvedProduct.description}
            price={solvedProduct.price}
          />
        </div>
      </section>
    </div>
  )
}