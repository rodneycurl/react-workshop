import React from 'react'
import ProductTile from './components/Product'

function App() {
  const products = [
    {
      id: 0,
      name: "JavaScript: The Definitive Guide",
      description: `Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers.`,
      price: 28.89
  },
  {
    id: 1,
    name: "Eloquent JavaScript",
    description: `JavaScript lies at the heart of almost every modern web application...`,
    price: 21.22
  },
  {
    id: 2,
    name: "JavaScript: The Good Parts",
    description: `Most programming languages contain good and bad parts, but JavaScript...`,
    price: 16.59
  }
]

  return (
    <section>
      <h1>Products</h1>
      { products.map(product =>
        <ProductTile key={ product.id }
                     item={ product } />
      )}
    </section>
  )
}

export default App
