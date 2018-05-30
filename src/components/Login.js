import React, { Component } from 'react';

import "../assets/CSS/bootstrap.min.css" 

import "../assets/CSS/animate.css" 
import "../assets/CSS/style.css" 

// <script src="js/jquery-3.1.1.min.js"></script>
//     <script src="js/bootstrap.min.js"></script>



class Login extends Component {
  render() {
    return (
        <div className="gray-bg">
        
        <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 className="logo-name">IN+</h1>

            </div>
            <h3>Welcome to IN+</h3>
            <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
            </p>
            <p>Login in. To see it in action.</p>
            <form className="m-t" role="form" action="http://webapplayers.com/inspinia_admin-v2.7.1/index.html">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username" required=""></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required=""></input>
                </div>
                <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                <a href="#"><small>Forgot password?</small></a>
                <p className="text-muted text-center"><small>Do not have an account?</small></p>
                <a className="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
            </form>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
    </div>
    );
  }
}

export default Login;
