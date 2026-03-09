import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/users")
    response
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h3>USER LIST</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App