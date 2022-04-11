import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12rem;
  height: 45vh;
  /* color: #fff; */
  color: #2ab4a5;
  background-color: #2b2b2b;
  /* padding: 20px; */
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  background-color: #2b2b2b;
  color: #2ab4a5;
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
export const Message = styled.input`
  background-color: #2b2b2b;
  color: #2ab4a5;
  height: 20vh;
  width: 60vw;
  /* resize: vertical; */
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 0;
  cursor: pointer;
  background: #f8f8f8;
  font-weight: bold;
  color: #2ab4a5;
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Alert = styled.span`
  display: none;
  text-align: center;

  &.visible {
    display: block;
  }
`;
