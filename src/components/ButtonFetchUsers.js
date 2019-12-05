import React from "react";
import "./ButtonFetchUsers.css";

const ButtonFetchUsers = props => {
  return (
    <button className="buttonShow" onClick={props.click}>
      Show user
    </button>
  );
};

export default ButtonFetchUsers;
