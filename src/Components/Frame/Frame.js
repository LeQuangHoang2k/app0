import React from "react";
import "./Frame.css";
function Frame({ message: { user, text }, name }) {
  if (user === name) {
    return (
      <div className="divBoxRight">
        <div className="divUserRight">{user}</div>
        <div className="divContentRight">
          <p>{text}</p>
        </div>
      </div>
    );
  } else if (user === `Hot news`) {
    return (
      <div className="divBoxCenter">
        <div className="divContentCenter">
          <p>{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="divBoxLeft">
        <div className="divUserLeft">{user}</div>
        <div className="divContentLeft">
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default Frame;
