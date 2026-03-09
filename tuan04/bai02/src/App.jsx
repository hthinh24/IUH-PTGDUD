import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [isError, setError] = useState(false)

  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/users")
    response
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
        setError(false)
      })
      .catch(err => {
        console.log("err: " + err)
        setIsLoading(false)
        setError(true)
      })
  }, [])

  if (isLoading == true) {
    return (
      <p>Loadingggggggggg</p>
    )
  }

  if (isError == true) {
    return (
      <p>Erorrrrrr</p>
    )
  }

  return (
    < div >
      <h3>USER LIST</h3>
      <ul>
        {!isLoading && !isError && users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App