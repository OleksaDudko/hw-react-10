import { Component } from "react";

class UserList extends Component {
  render() {
    const {userData, onDell} = this.props
    return (
      <ul>
        {userData.map(({id, lastName, secondName, email}) => {
          return (
            <li key={id}>
              <h2>{lastName}</h2>
              <p>{secondName}</p>
              <p>{email}</p>
              <button onClick={() => onDell(id)} type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UserList;
