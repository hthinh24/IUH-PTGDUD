import { Link, Outlet, RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <>
        <nav>
          <Link to='/' >Home</Link> <br/>
          <Link to='/about' >About</Link> <br/>
          <Link to='/contact' >Contact</Link> <br/>
        </nav>
        <Outlet />
    </>
  )
}

export default App
