import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Components/Message";
import FlipMove from "react-flip-move";
import { Input, Button } from "@material-ui/core";
import firebase from "firebase";
import { db } from "./firebase";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter Your name"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: message,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
