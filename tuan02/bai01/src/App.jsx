import React from 'react'
import ProductCard from './components/ProductCard'
import ipImg from './assets/ip16.png'
const App = () => {
  return (
    <ProductCard 
      name = 'iPhone 17'
      price = '999$'
      src = {ipImg}

      productCard = 'product-card'
      productImage = 'product-image'
      productContent = 'product-content'
      productTitle = 'product-title'
      productPrice = 'product-price'
      productButton = 'product-button'
    />
  )
}

export default App