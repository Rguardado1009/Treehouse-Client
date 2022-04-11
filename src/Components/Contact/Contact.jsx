import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Message, Button, Alert } from "./ContactStyles";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../features/user/userSlice.js";
export default function Contact() {
  const userEmail = useSelector(selectUserEmail);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  console.log(userEmail);
  const submit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const serviceId = "spectrum";
      const templateId = "template_ag9hh2j";
      const userId = "7ivDaE8gpRpPRieXh";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div>
      <Form id="contact-form">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Message
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Message>
        <Button onClick={submit}>Send Message</Button>
        <Alert className={emailSent ? "visible" : null}>
          Thank you for your message, we will be in touch in no time!
        </Alert>
      </Form>
    </div>
  );
}
