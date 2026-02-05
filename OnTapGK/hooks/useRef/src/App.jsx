import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {

  // Giải thích: useRef để lưu trữ ID của interval
  // Khi nhấn nút START sẽ tạo interval để tăng biến count lên 1 đơn vị mỗi giây
  // ID của interval được lưu trong refCount.current
  // Khi nhấn nút STOP sẽ clear interval dựa vào ID lưu trong refCount.current

  const [count, setCount] = useState(0)
  const refCount = useRef(null)

  const startTimer = () => {
    if (refCount.current) clearInterval(refCount.current)

    console.log("Start timer, create interval!")

    refCount.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      console.log("Interval called!")
    }, 1000)
  }

  const stopTimer = () => {
    if (refCount.current) {
      console.log("Stop timer, clear interval!")
      clearInterval(refCount.current)
    }
  }

  return (
    <div>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <div>COUNT: {count}</div>
    </div>
  )
}

export default App