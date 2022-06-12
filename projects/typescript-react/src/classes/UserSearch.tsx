import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const userFound = this.props.users.find((e) => e.name === this.state.name);
    this.setState({ user: userFound });
  };
  render() {
    const { user, name } = this.state;
    return (
      <div>
        User Search!
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find</button>
        <div>
          {user?.name} {user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
