import React from "react";
import "./Info.css";
import OnlineIcon from "../../Icons/OnlineIcon.png";
import CloseIcon from "../../Icons/CloseIcon.png";

function Info({ name, room, onClickToClose }) {
  return (
    <div className="divNameRoom">
      <div className="divLeft">
        <img src={OnlineIcon} alt="abc" />
        &nbsp; {name}
      </div>
      <div className="divMiddle">Room : {room}</div>
      <div className="divRight" onClick={(e) => onClickToClose(e)}>
        <img src={CloseIcon} alt="abc" className="img-responsive" />
      </div>
    </div>
  );
}

export default Info;
