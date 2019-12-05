import React from "react";
import "./UsersList.css";

const UsersList = props => {
  const users = props.users.map(user => (
    <li key={user.login.uuid}>
      <img src={user.picture.large} alt={user.picture.large} />
      <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.location.state}</p>
    </li>
  ));
  return <ul className="usersList">{users}</ul>;
};

export default UsersList;
