import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import App from '../App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
                ]
    },
    
])