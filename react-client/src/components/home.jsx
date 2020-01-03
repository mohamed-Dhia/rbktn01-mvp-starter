import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import $ from "jquery";
import { runInThisContext } from "vm";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <div>nice</div>
          <Link to="/login">logIn</Link>
          <Link to="/signUp">signup</Link>
        </div>
      </Router>
    );
  }
}
export default Home;
