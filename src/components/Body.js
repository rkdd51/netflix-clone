import React from 'react'
import Browse from './Browse';
import Login from './Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Body = () => {
    const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
        },
        {
    path: "/Browse",
    element: <Browse />,
  },
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body
