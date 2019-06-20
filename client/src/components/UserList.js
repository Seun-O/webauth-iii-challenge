import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/index";

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props.users);
    return (
      <div>
        {this.props.users.map(user => (
          <h1 key={user.id}>{user.username}</h1>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(UserList);
