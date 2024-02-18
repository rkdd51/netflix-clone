import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-background"
        />
      </div>
      <form className="absolute w-3/12 mx-auto my-36 right-0 left-0 bg-black p-10 bg-opacity-80 text-white">
        <h1 className="text-white text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="p-4 w-full my-4 bg-gray-700"
        />
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Email"
            className="p-4 w-full my-4 bg-gray-700"
          />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Password"
          className="p-4 w-full my-4 bg-gray-700"
        />
        <button className="bg-red-800 w-full p-4 my-4 ">Submit</button>
        <p onClick={toggleSignIn} className="p-4 my-4 w-full cursor-pointer">
          {isSignIn ? "New to Netflix Sign Up " : "Already a User? Sign In"} Now
        </p>
      </form>
    </div>
  );
};

export default Login;
