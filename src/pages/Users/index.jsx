import React, { Component } from "react";
import { getUsers } from "../../api/users";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const data = await getUsers();
    this.setState({ users: data });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    );
  }
}

export default Users;
