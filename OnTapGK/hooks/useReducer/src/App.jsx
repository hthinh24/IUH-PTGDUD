import React, { useReducer } from 'react'

const App = () => {

  // Giải thích: useReducer nhận vào 1 custom reducer function và state khởi tạo
  // 1. customer reducer lắng nghe 2 sự kiện 
  // INCREMENT và DECREMENT tăng / giảm biến count đi 1 đơn vị
  // 2. Giá trị khởi tạo của state là { count: 0 }
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log("1. Increase action called!")
        return { count: state.count + 1 }
      case 'DECREMENT':
        console.log("2. Decrease action called!")
        return { count: state.count - 1 }
      default:
        return state
    }
  }, { count: 0 })

  return (
    <div>
      <div>COUNT: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
    </div>
  )
}

export default App