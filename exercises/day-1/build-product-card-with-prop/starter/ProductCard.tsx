import ProductTitle from './ProductTitle'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'

//  const Product = {
//   title: 'Wireless Headphones',
//   description: 'Noise-cancelling over-ear headphones with a 30-hour battery life.',
//   price: '$129',
// }


export default function ProductCard() {
  return (
    <article className="product-card">
      <ProductTitle title='mock_title' />
      <ProductDescription description="mock_description" />
      <ProductPrice price="mock_price" />
      <button>Add to Cart</button>
    </article>
  )
}
