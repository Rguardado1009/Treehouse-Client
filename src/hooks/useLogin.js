import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  // selectUserName,
  // selectUserPhoto,
  // selectUserEmail,
  setUserLogin,
} from "../features/user/userSlice";

export const useLogin = () => {
  const [err, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        let user = result.user;
        console.log(result);
        console.log("user Logged in");
        dispatch(
          setUserLogin({
            name: user.email,
            photo: user.photoUrl,
            email: user.email,
          })
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { err, login };
};
