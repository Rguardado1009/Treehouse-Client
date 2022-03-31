import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { setUserLogin } from "../features/user/userSlice";
export const useSignInWithPopup = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popUp = () => {
    setError(null);
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        console.log(result);
        dispatch(
          setUserLogin({
            name: user.displayName,
            photo: user.photoUrl,
            email: user.email,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { error, popUp };
};
