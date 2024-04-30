
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../src/utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../../src/utils/constants";
const Header = () => {
  let navigate = useNavigate();
  let userInformationFromStore = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  //* User Authentication
  useEffect(() => {
   let unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        //! Data stores in redux store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
   });
    return () => {
      unsubscribe();
    };
  }, []);
  //* Function that logs out of the Application
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log("error: ", error);
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between w-screen">
      <img className="w-44" src={LOGO} alt="logo" />
      {userInformationFromStore && (
        <div>
          <button onClick={handleLogout} className="p-4 text-2xl text-blue-950">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
