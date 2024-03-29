import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import {store} from './store/store.js'
import { Provider } from 'react-redux'
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/projects',
        element: <Projects />
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
