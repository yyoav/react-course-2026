import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";



export default function ProductCard() {
  return (
    <article className="product-card">
      <ProductTitle />
      <ProductDescription  />
      <ProductPrice />
    </article>
  )
}