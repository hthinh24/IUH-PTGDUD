import { useMemo } from 'react'
import { useState } from 'react'

const App = () => {

  // Giải thích: useMemo để ghi nhớ giá trị tính toán của total
  // mà không bị ảnh hưởng khi user nhập input tạo product mới
  // Chỉ khi mảng product thay đổi thì hàm tính total mới được gọi lại
  const [form, setForm] = useState({ name: '', price: '' })
  const [product, setProduct] = useState([
    { name: 'Product A', price: 100 },
    { name: 'Product B', price: 200 },
    { name: 'Product C', price: 300 },
  ])

  const total = useMemo(() => {
    // Giả lập heavy task
    console.log("Calculating total price...")
    return product.reduce((total, prod) => total + prod.price, 0)
  }, [product])

  return (
    <div>
      <h3>PRODUCT LIST</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />
      <button
        onClick={() => {
          setProduct([...product, { name: form.name, price: form.price }])
          setForm({ name: '', price: '' })
        }}
      >
        ADD PRODUCT
      </button>
      <ul></ul>
      {product.map((prod, index) => (
        <li key={index}>
          {prod.name} - ${prod.price}
        </li>
      ))}
      <h4>TOTAL: {total}$</h4>
    </div>
  )
}

export default App