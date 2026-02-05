import React from 'react'

const App = () => {

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