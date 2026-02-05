import React from 'react'

const App = () => {

  // Giải thích: useState cho biến đếm count với giá trị khởi tạo là 0
  // Mỗi lần nhấn btn Increment sẽ gọi hàm setCount để tăng biến count lên 1
  // và refresh component lại với giá trị count mới 
  const [count, setCount] = React.useState(0)
  console.log('App rendered, count: ', count)

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App