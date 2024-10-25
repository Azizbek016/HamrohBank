
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutPage from './NavbarLayout/LayoutPage'

import Haqida from './pages/Haqida';


import NotFound from './NotFound/NotFound';
import Kreditlar from './pages/Kreditlar';
import Omonat from './pages/Omonat';
import Kartalar from './pages/Kartalar';
import Contact from './pages/Contact';
import Asosiy from './pages/Asosiy';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Sharh from './pages/Sharh';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LayoutPage/>,
      children: [
        {
          path: '/',
          element: [
            <>
              <Asosiy/>
            </>
          ]
        },
        {
          path: '/asosiy',
          element: <Asosiy/>
        },
        {
          path: '/about',
          element: <Haqida/>
        },
        {
          path: '/credit',
          element: <Kreditlar/>
        },
        {
          path: '/network',
          element: <Sharh/>
        },
        {
          path: '/deposit',
          element: <Omonat/>
        },
        {
          path: 'cards',
          element: <Kartalar/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'signin',
          element: <Signin/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },

      ]
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ])


  return (
    <>
      <RouterProvider router={routes} />
      
    </>
  )
}

export default App
