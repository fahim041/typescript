import { Component } from "react";
import UserSearch from "./UserSearch";

interface UserState {
  users: { name: string; age: number }[];
}

class User extends Component {
  state: UserState = {
    users: [
      { name: "Sarah", age: 20 },
      { name: "Alex", age: 20 },
      { name: "Micheal", age: 20 },
    ],
  };

  render() {
    return <UserSearch users={this.state.users} />;
  }
}

export default User;
