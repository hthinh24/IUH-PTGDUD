import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className={props.productCard}>
        <div className={props.productImage}>
            <img src={props.src} alt="" className='img' />
        </div>
        <div className={props.productContent}>
            <h3 className={props.productTitle}>{props.name}</h3>
            <p className={props.productPrice}>{props.price}</p>
            <button className={props.productButton}>
                Add to card
            </button>
        </div>
    </div>
  )
}

export default ProductCard