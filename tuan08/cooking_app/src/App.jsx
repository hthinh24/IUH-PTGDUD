import React from 'react'
import Home from './pages/home/home'
import { RouterProvider } from 'react-router'
import { router } from './router/router'

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
