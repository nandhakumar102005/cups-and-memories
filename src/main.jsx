import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
 import Home from './Home'
import Navbar from './Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import TableBooking from './TableBooking'
import Menu from './Menu'
import Contact from './Contact'
import About from './About'


const router = createBrowserRouter([

  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/TableBooking",
    element:<TableBooking/>
  },
  {
    path:"/Menu",
    element:<Menu/>
  },
  {
  path:"/Contact",
  element:<Contact/>
  },
  {
  path:"/About",
  element:<About/>
  }
])
    


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

 
)
