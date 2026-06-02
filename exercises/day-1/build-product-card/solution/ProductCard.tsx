interface ProductCardProps {
  title: string
  description: string
  price: string
}

export default function ProductCard({ title, description, price }: ProductCardProps) {
  return (
    <article className="product-card">
      <strong>{title}</strong>
      <p className="product-meta">{description}</p>
      <p className="product-price">{price}</p>
      <button className="product-button" type="button">
        Add to cart
      </button>
    </article>
  )
}