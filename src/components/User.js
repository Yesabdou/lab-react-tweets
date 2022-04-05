import React from "react";

const User = (props) => {
  console.log("User info");

  console.log(props, Date.now());

  return (
    <span className="user">
      <span className="name">{props.userData.name} </span>
      <span className="handle">@ {props.userData.handle}</span>
    </span>
  );
};

export default User;
