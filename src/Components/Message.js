import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <Card ref={ref} className={isUser ? " message message-user" : "message"}>
      <CardContent label={message.username}>
        <Typography color="white" variant="h5" component="h2">
          {isUser ? "" : `${message.username}: `}
          {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Message;
