import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Header />, children: [
        { index: true, element: <Home /> }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}



export default App

