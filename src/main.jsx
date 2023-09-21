import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router'
import myCreateRouter from './Route/Route'

// const myCreateRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>this is router</div>
//   },
//   {
//     path: "about",
//     element: <div>this is about section</div>
//   }
// ])


// const myCreateRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayOut></MainLayOut>,
    
//     children:[
//       {
//         path:"/",
//         element: <Home></Home>
//       },
//       {
//         path:"about",
       
//       },
//       {
//         path: "products",
//         element: <Products></Products>
//       }
//     ]
//   },
  
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter}></RouterProvider>
  </React.StrictMode>,
)
