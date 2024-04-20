import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {


  //* Routes Defined
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
