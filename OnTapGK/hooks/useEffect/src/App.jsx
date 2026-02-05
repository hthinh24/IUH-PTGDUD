import { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  // Giải thích: useEffect với vói mảng depend rỗng [] để chạy 1 lần duy nhất khi component
  // được khởi tạo
  // Trong useEffect tạo 1 interval để mỗi 1s tăng biến count lên 1 đơn vị
  // Đồng thời có 1 cleanup function để clear interval khi useEffect được gọi lại
  // mà không chạy "thêm 1 interval" mới
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      console.log("Interval called!")
    }, 1000)

    console.log("useEffect called!")

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <h3>AUTO INCREASEMENT COUNT AFTER 1 SECOND!</h3>
      <div>COUNT: {count}</div>
    </div>
  )
}

export default App