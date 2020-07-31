import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Components/Message";
import { Input, Button } from "@material-ui/core";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setUsername(prompt("Enter Your name"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([{ username: username, text: message }, ...messages]);
    setMessage("");
  };
  return (
    <div className="app">
      <h3>Welcome {username}</h3>
      <form>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
      {messages.map((message) => (
        <Message message={message} username={username} />
      ))}
    </div>
  );
}

export default App;
