import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import Info from "../Info/Info";
import Input from "../Input/Input";
import FrameChat from "../FrameChat/FrameChat";
import ListUser from "../ListUser/ListUser";

let socket = null;
const Chat = ({location}) => {
  const [name, setStateName] = useState("");
  const [room, setStateRoom] = useState("");
  const [message, setStateMessage] = useState("");
  const [messages, setStateMessages] = useState([]);
  const [users, setStateUsers] = useState("");
  const ENDPOINT = "https://le-quang-hoang-appchat-0.herokuapp.com/";
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setStateName(name);
    setStateRoom(room);
    socket = io(ENDPOINT);
    socket.emit("req-info", { name, room }, (error) => {
      if (error) {
        alert(error);
        window.location.href = "/";
        socket.emit("req-disconnect");
      }
    });
  }, [ENDPOINT,location.search]);
  useEffect(() => {
    socket.on("res-info", ({ user, text }) => {
      setStateMessages((messages) => [...messages, { user, text }]);
      // console.log(messages);
    });
    socket.on("res-listUser", ({ users }) => {
      setStateUsers(users);
    });
  }, []);
  const reqMessage = (e) => {
    e.preventDefault();

    if (message) {
      console.log(message);
      socket.emit("req-message", message, () => setStateMessage(""));
    }
  };
  const onClickToClose = (e) => {
    window.location.href = "/";
    socket.emit("req-disconnect");
  };
  return (
    <div className="divContainer">
      <div className="divLeftContainer">
        <ListUser users={users} />
      </div>
      <div className="divRightContainer">
        <Info name={name} room={room} onClickToClose={onClickToClose} />
        <FrameChat messages={messages} name={name} />
        <Input
          reqMessage={reqMessage}
          message={message}
          setStateMessage={setStateMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
