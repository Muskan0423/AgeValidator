import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Check from './Pages/Check'
import Result from './Pages/Result'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",element:<Check/>
    },
    {path:"/result",element:<Result/>}
  ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
