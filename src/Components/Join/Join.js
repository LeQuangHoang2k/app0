import React, { useState, useEffect } from "react";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    setName(name);
    setRoom(room);
  });
  const onClickToLink = (e) => {
    if (name) {
      if (room) {
        window.location.href = `/chat?name=${name}&room=${room}`;
      } else {
        e.preventDefault();
        alert("Room is required !!!");
      }
    } else {
      e.preventDefault();
      alert("Name is required !!!");
    }
  };
  const onKeyToLink = (e) => {
    if (e.key === "Enter") {
      if (name) {
        if (room) {
          window.location.href = `/chat?name=${name}&room=${room}`;
        } else {
          e.preventDefault();
          alert("Room is required !!!");
        }
      } else {
        e.preventDefault();
        alert("Name is required !!!");
      }
    }
  };

  return (
    <div className="divOuter">
      <div className="divInner">
        <h1 className="h1Title">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="inputJoin"
            type="text"
            onChange={(e) => setName(e.target.value)}
            onKeyPress={onKeyToLink}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="inputJoin"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            onKeyPress={onKeyToLink}
          />
        </div>

        <button className="btnJoin" onClick={onClickToLink}>
          J o i n
        </button>
      </div>
    </div>
  );
};

export default Join;
