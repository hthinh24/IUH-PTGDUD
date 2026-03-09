import React, { useEffect, useState } from 'react'

const App = () => {

  const [inputId, setInputId] = useState("")
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

  }, [])

  function handleOnClick() {
    setIsLoading(true)
    const url = "https://jsonplaceholder.typicode.com/users" + "?id=" + inputId
    console.log(url)
    const response = fetch(url)
    response
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user ID"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <button onClick={() => { handleOnClick() }}>Find</button>

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