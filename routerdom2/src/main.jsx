import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Layout/Layout.jsx'
import Home from '../../routerdom/src/Component/Home/Home.js'
import About from '../../routerdom/src/Component/About/About.js'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
   {
    path:"",
    element: <Home />
   },
   {
    path:"/About",
    element: <About />
   }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
