import React from "react";
import "./Input.css";

const Input = ({ message, setStateMessage, reqMessage }) => {
  return (
    <div className="divChat">
      <input
        className="inputInnerChat"
        placeholder="Chat here...."
        type="text"
        value={message}
        onChange={(e) => setStateMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? reqMessage(e) : null)}
      />
      <div className="divSend" onClick={(e) => reqMessage(e)}>
        <button id="buttonOuter">
          <span id="spanInner"> Send </span>
          <span id="top"></span>
          <span id="right"></span>
          <span id="bottom"></span>
          <span id="left"></span>
        </button>
      </div>
    </div>
  );
};

export default Input;
