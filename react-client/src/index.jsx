import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import LogIn from "./components/logIn.jsx";
import SignUp from "./components/signUp.jsx";
import MainPage from "./components/mainPage.jsx";

import $ from "jquery";
import { runInThisContext } from "vm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <MainPage />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

{
  /* <Router>
<div>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
  </Switch>
</div>
</Router> */
}

// componentDidMount() {
//   $.ajax({
//     url: "/items",
//     success: data => {
//       this.setState({
//         items: data
//       });
//     },
//     error: err => {
//       console.log("err", err);
//     }
//   });
// }

// return (
//   <Router>
//     <div>
//       <div class="text-center">
//         <div class="logo">login</div>
//         <div class="login-form-1">
//           <form id="login-form" class="text-left">
//             <div class="login-form-main-message"></div>
//             <div class="main-login-form">
//               <div class="login-group">
//                 <div class="form-group">
//                   <label for="lg_username" class="sr-only">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="lg_username"
//                     name="lg_username"
//                     placeholder="username"
//                     value={this.state.name}
//                     onChange={e => {
//                       this.handleChange(e, "name");
//                     }}
//                   />
//                 </div>
//                 <div class="form-group">
//                   <label for="lg_password" class="sr-only">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     class="form-control"
//                     id="lg_password"
//                     name="lg_password"
//                     placeholder="password"
//                     value={this.state.pass}
//                     onChange={e => {
//                       this.handleChange(e, "pass");
//                     }}
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 class="login-button"
//                 onClick={() => {
//                   this.logIn();
//                 }}
//               >
//                 <i class="fa fa-chevron-right"></i>login
//               </button>
//             </div>
//             <div class="etc-login-form">
//               <p>
//                 forgot your password? <a href="#">click here</a>
//               </p>
//               <p>
//                 new user? <a href="#">create new account</a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>

//     <div class="text-center">
//       <div class="logo">register</div>
//       <div class="login-form-1">
//         <form id="register-form" class="text-left">
//           <div class="login-form-main-message"></div>
//           <div class="main-login-form">
//             <div class="login-group">
//               <div class="form-group">
//                 <label for="reg_username" class="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="reg_username"
//                   name="reg_username"
//                   placeholder="username"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="reg_password" class="sr-only">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="reg_password"
//                   name="reg_password"
//                   placeholder="password"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="reg_password_confirm" class="sr-only">
//                   Password Confirm
//                 </label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="reg_password_confirm"
//                   name="reg_password_confirm"
//                   placeholder="confirm password"
//                 />
//               </div>

//               <div class="form-group">
//                 <label for="reg_email" class="sr-only">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="reg_email"
//                   name="reg_email"
//                   placeholder="email"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="reg_fullname" class="sr-only">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="reg_fullname"
//                   name="reg_fullname"
//                   placeholder="full name"
//                 />
//               </div>

//               <div class="form-group login-group-checkbox">
//                 <input
//                   type="radio"
//                   class=""
//                   name="reg_gender"
//                   id="male"
//                   placeholder="username"
//                 />
//                 <label for="male">male</label>

//                 <input
//                   type="radio"
//                   class=""
//                   name="reg_gender"
//                   id="female"
//                   placeholder="username"
//                 />
//                 <label for="female">female</label>
//               </div>

//               <div class="form-group login-group-checkbox">
//                 <input
//                   type="checkbox"
//                   class=""
//                   id="reg_agree"
//                   name="reg_agree"
//                 />
//                 <label for="reg_agree">
//                   i agree with <a href="#">terms</a>
//                 </label>
//               </div>
//             </div>
//             <button type="submit" class="login-button">
//               <i class="fa fa-chevron-right"></i>
//             </button>
//           </div>
//           <div class="etc-login-form">
//             <p>
//               already have an account? <a href="#">login here</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>

//     <div class="text-center">
//       <div class="logo">forgot password</div>
//       <div class="login-form-1">
//         <form id="forgot-password-form" class="text-left">
//           <div class="etc-login-form">
//             <p>
//               When you fill in your registered email address, you will be
//               sent instructions on how to reset your password.
//             </p>
//           </div>
//           <div class="login-form-main-message"></div>
//           <div class="main-login-form">
//             <div class="login-group">
//               <div class="form-group">
//                 <label for="fp_email" class="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="fp_email"
//                   name="fp_email"
//                   placeholder="email address"
//                 />
//               </div>
//             </div>
//             <button type="submit" class="login-button">
//               <i class="fa fa-chevron-right"></i>
//             </button>
//           </div>
//           <div class="etc-login-form">
//             <p>
//               already have an account? <a href="#">login here</a>
//             </p>
//             <p>
//               new user? <a href="#">create new account</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </Router>
// );
