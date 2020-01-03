import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import $ from "jquery";
import { runInThisContext } from "vm";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", pass: "" };
  }
  handleChange(event, target) {
    this.setState({ [target]: event.target.value });
  }
  logIn() {
    axios
      .post("/logIn", { userName: this.state.name, password: this.state.pass })
      .then(console.log("sent"));
  }
  render() {
    return <div>login</div>;
  }
}

export default LogIn;
{
  /* <div>
<div class="text-center">
  <div class="logo">login</div>
  <div class="login-form-1">
    <form id="login-form" class="text-left">
      <div class="login-form-main-message"></div>
      <div class="main-login-form">
        <div class="login-group">
          <div class="form-group">
            <label for="lg_username" class="sr-only">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="lg_username"
              name="lg_username"
              placeholder="username"
              value={this.state.name}
              onChange={e => {
                this.handleChange(e, "name");
              }}
            />
          </div>
          <div class="form-group">
            <label for="lg_password" class="sr-only">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="lg_password"
              name="lg_password"
              placeholder="password"
              value={this.state.pass}
              onChange={e => {
                this.handleChange(e, "pass");
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          class="login-button"
          onClick={() => {
            this.logIn();
          }}
        >
          <i class="fa fa-chevron-right"></i>login
        </button>
      </div>
      <div class="etc-login-form">
        <p>
          forgot your password? <a href="#">click here</a>
        </p>
      </div>
    </form>
  </div>
</div>
</div> */
}
