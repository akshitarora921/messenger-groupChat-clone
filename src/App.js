import React, { useState, useEffect } from "react";
import Message from "./Components/Message";
import FlipMove from "react-flip-move";
import { Input, FormControl, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
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
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/1024px-Facebook_Messenger_4_Logo.svg.png"
        alt="Logo"
        height="100px"
      />
      <h3>Welcome {username}</h3>
      <div className="message-form">
        <form>
          <FormControl className="app-form-control">
            <Input
              className="app-input"
              placeholder="Enter a message..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <IconButton
              type="submit"
              className="app-button"
              variant="contained"
              // disabled={!input}
              color="primary"
              onClick={handleSubmit}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
