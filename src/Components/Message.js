import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";
function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <Card className={isUser ? " message message-user" : "message"}>
      <CardContent label={message.username}>
        <Typography color="textSecondary" gutterBottom>
          {message.username}
        </Typography>
        <Typography color="white" variant="h5" component="h2">
          {message.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
