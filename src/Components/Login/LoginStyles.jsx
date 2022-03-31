import styled from "styled-components";
export const Container = styled.div`
  min-height: 90vh;
  background: #2b2b2b;

  /* linear-gradient(
    0deg,
    rgba(103, 109, 117, 1) 0%,
    rgba(42, 180, 164, 1) 100%
  ); */
`;

export const FormWrap = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  padding-bottom: 50px;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  /* margin: 0 auto; */
  padding: 80px 40px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 60px;
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  /* font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #000;
  text-align: center; */
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const Input = styled.input`
  margin-bottom: 32px;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 10px 20px;
  background-blend-mode: overlay;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.4);

  :focus {
    outline: white;
  }
`;

export const FormButton = styled.button`
  background: #2ab4a4;
  padding: 16px 16px;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  background: linear-gradient(180deg, #2ab4a4 20%, #676d75 100%);
  width: 200px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const GoggleButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 184px;
  height: 42px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #4285f4;
`;

export const GoogleIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: #fff;
`;

export const ButtonText = styled.h1`
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.2px;
  font-family: "Roboto";
  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669f2;
  }
`;
