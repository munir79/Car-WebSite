import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Main from './Root/Main.jsx'
import Login from './Pages/Login/Login.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import SugnUp from './Pages/SignUp/SugnUp.jsx'
import CheeckOut from './Pages/CheckOut/CheeckOut.jsx'
import Bookings from './Pages/Bookings/Bookings.jsx'
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SugnUp></SugnUp>
      
      },
      {
        path:'/cheekout/:id',
        element:<PrivateRoute><CheeckOut></CheeckOut></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>,
</div>
)
