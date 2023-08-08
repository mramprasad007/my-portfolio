import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './route'

const App = (): JSX.Element => {
  return <RouterProvider router={Router} />
}

export default App
