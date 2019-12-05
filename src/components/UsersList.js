import React from "react";
import "./UsersList.css";

const UsersList = props => {
  const users = props.users.map(user => (
    <div key={user.login.uuid}>
      <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  ));
  return <ul className="usersList">{users}</ul>;
};

export default UsersList;
