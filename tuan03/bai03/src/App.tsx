import React, { useEffect, useMemo, useState } from 'react'

const App = () => {

  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])

  const filter = useMemo(() => {
    return products.filter((p) => p.title == search)
  }, [search])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
  }, [])

  return (
    <div>
      <div>Input: </div>
      <input type="text" name="text" id="" onChange={(e) => setSearch(e.value)} />
      <div>Total: {products}</div>
    </div>
  )
}

export default App