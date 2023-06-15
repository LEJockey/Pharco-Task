import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import PageOne from './Components/PageOne/PageOne';
import PageTwo from './Components/PageTwo/PageTwo';
import PageThree from './Components/PageThree/PageThree';


const App = () => {

  let routers = createBrowserRouter([{
    path: '', element: <LayOut/>, children: [
      {path: '', element: <Home/>},
      {path: 'page-one', element: <PageOne/>},
      {path: 'page-two', element: <PageTwo/>},
      {path: 'page-three', element: <PageThree/>}
    ]
  }])
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
