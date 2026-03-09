import React, { useEffect, useState } from 'react'

const App = () => {

  const [inputId, setInputId] = useState("")
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    if (!inputId) {
      return
    }

    const url = "https://jsonplaceholder.typicode.com/users/" + inputId
    console.log(url)
    const response = fetch(url)
    response
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setIsLoading(false)
        setError(false)
      })
      .catch(err => {
        setError(true)
        console.log("err: " + err)
      })
  }, [inputId])

  function handleOnClick() {
    const newId = document.getElementById('input').value
    if (newId == inputId) {
      return
    }

    if (newId >= 1 && newId <= 10) {
      setIsLoading(true)
      setError(false)
    } else {
      alert("Dữ liệu nhập phải là số trong khoảng 1 - 10")
    }

    setInputId(newId)
  }

  if (isError) {
    return <p>Erorrrrrrrrrrrrrrrr</p>
  }

  return (
    <div>
      <input id="input"
        type="text"
        placeholder="Enter user ID"
      />
      <button onClick={() => { handleOnClick() }}>Find</button>

      <h3>USER LIST</h3>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li key={user.id}>
            <p>name: {user.name}</p>
            <p>phone: {user.email}</p>
            <p>website: {user.website}</p>
          </li>
        </ul>
      )}
    </div>
  )
}

export default App