import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import App from '../components/App';
import Login from '../components/Login';

const RootRoute = () => {
    return (
      <Router>
        <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  };
  
  export default RootRoute;