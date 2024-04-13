import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../src/utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [isError, setIsError] = useState(null);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //* Sign and Signup button

  const handleButtonClick = () => {
    //! Validating input fields
    const message = checkValidation(
      emailRef.current.value,
      passwordRef.current.value
    );
    setIsError(message);
    if (message) return;

    //! For SignUp
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user: ", user);
          //! Adding the below function because the "displayName" was not getting registered on the first load when "onAuthStateChanged" is called from Body.js
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              console.log("error: ", error);
              navigate("/error");
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorCode + " " + errorMessage);
          navigate("/");
        });
    }
    // ! For SignIn
    else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user signIn: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorCode + " " + errorMessage);
          navigate("/");
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 mx-auto my-36 right-0 left-0 bg-black p-10 bg-opacity-80 text-white"
      >
        <h1 className="text-white text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className="p-4 w-full my-4 bg-gray-700"
        />
        {!isSignIn ? (
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="p-4 w-full my-4 bg-gray-700"
          />
        ) : (
          ""
        )}
        <input
          ref={passwordRef}
          type="text"
          placeholder="Password"
          className="p-4 w-full my-4 bg-gray-700"
        />
        <p className="text-red-900 font-bold">{isError}</p>
        <button
          className="bg-red-800 w-full p-4 my-4"
          onClick={handleButtonClick}
        >
          Submit
        </button>
        <p onClick={toggleSignIn} className="p-4 my-4 w-full cursor-pointer">
          {isSignIn ? "New to Netflix Sign Up " : "Already a User? Sign In"} Now
        </p>
      </form>
    </div>
  );
};

export default Login;
