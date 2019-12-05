import React, { Component } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import ButtonFetchUsres from "./components/ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null
  };

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.results
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const users = this.state.users;
    return (
      <div className="App">
        <ButtonFetchUsres click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
