import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button, TextareaAutosize, InputLabel } from "@mui/material";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gf1y7ha",
        "template_te9uvde",
        form.current,
        "Z8sh-4HD70jP-HY-0"
      )
      .then(
        (result) => {
          alert("Message sent");
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "0 auto",
        }}
        onSubmit={sendEmail}
      >
        <InputLabel>Name</InputLabel>
        <Input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel>Message</InputLabel>
        <TextareaAutosize
          style={{ height: 200 }}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" value="Send">
          Send
        </Button>
      </form>
    </>
  );
};

export default Email;
