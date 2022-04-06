import { React, useState } from "react";
// import { useSignup } from "../../hooks/useSignup.js";
import { useLogin } from "../../hooks/useLogin.js";
import { useSignInWithPopup } from "../../hooks/useSignInWithPopup.js";
import { FcGoogle } from "react-icons/fc";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  Input,
  FormButton,
  Text,
  GoggleButton,
  GoogleIconWrapper,
  ButtonText,
} from "../Login/LoginStyles.jsx";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { error, signup } = useSignup();
  const { err, login } = useLogin();
  const { error, popUp } = useSignInWithPopup();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const handlePopup = (e) => {
    e.preventDefault();
    popUp();
  };

  return (
    <>
      <Container>
        <FormContent>
          <FormWrap>
            <FormH1>Sign in </FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <Input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormLabel htmlFor="for">Password</FormLabel>
            <Input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormButton onClick={handleSubmit} type="submit">
              Continue
            </FormButton>
            <Text>Forgot password</Text>
            {err && <p>{err}</p>}
          </FormWrap>
          <GoggleButton onClick={handlePopup}>
            <GoogleIconWrapper>
              <FcGoogle size="24px" />
            </GoogleIconWrapper>
            <ButtonText>Sign in with Google</ButtonText>
          </GoggleButton>
        </FormContent>
      </Container>
    </>
  );
}
