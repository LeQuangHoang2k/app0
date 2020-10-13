import React from "react";
import "./FrameChat.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Frame from "../Frame/Frame";

const FrameChat = ({ messages, name }) => {
  return (
    <ScrollToBottom className="divFrameChat">
      {messages.map((message, i) => (
        <div key={i}>
          <Frame message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default FrameChat;
