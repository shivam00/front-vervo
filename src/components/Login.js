import React, { Component } from 'react';

import "../assets/CSS/bootstrap.min.css" 

import "../assets/CSS/animate.css" 
import "../assets/CSS/style.css" 

class Login extends Component {
  render() {
    return (
       
        
        <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 className="logo-name">IN+</h1>

            </div>
            <h3>Welcome to V+</h3>
            <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
            </p>
            <p>Login in. To see it in action.</p>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username" required="" id="email"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="" id="password"></input>
                </div>
                <button type="submit" className="btn btn-primary block full-width m-b" onClick={() => {
                
                }}>Login</button>

        </div>
    </div>
   
    );
  }
}

export default Login;
