import React from 'react'

function App() {
  const product = {
    name: "JavaScript: The Definitive Guide",
    description: `Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers`,
    price: 28.89
  }

  return (
    <section>
      <h1>Hello DevMeetings!</h1>

    <div>
      <header>{ product.name }</header>
      <p>
        { product.description }
      </p>
      <span>${ product.price }</span>
    </div>
    </section>
  )
}

export default App
