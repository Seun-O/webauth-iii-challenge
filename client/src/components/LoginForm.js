import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../actions";

import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    this.setState({ credentials: { username: "", password: "" } });
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="username"
            value={this.state.credentials.username}
            name="username"
          />
          <input
            type="password"
            onChange={this.handleChange}
            placeholder="password"
            value={this.state.credentials.password}
            name="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const wrappedForm = withRouter(LoginForm);

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { login }
)(wrappedForm);
