import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setSignOut } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
export const useLogout = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setSignOut());
        navigate("/");
        console.log("signed out");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  return { error, logout };
};
