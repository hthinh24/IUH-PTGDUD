import { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

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