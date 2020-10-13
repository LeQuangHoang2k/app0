import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./ListUser.css";
import OnlineIcon from "../../Icons/OnlineIcon.png";

const ListUser = ({ users }) => {
  return (
    <ScrollToBottom className="divListUser">
      <h2>People currently chatting:</h2>
      {users ? (
        <div className="divLeftByPx">
          <div className="activeContainer">
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <h2>
                  <img src={OnlineIcon} class="img-responsive" alt="abc" />{" "}
                  {name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </ScrollToBottom>
  );
};

export default ListUser;
