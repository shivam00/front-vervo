import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import App from '../components/App';

const RootRoute = () => {
    return (
      <Router>
        <Route path="/" component={App} />
      </Router>
    );
  };
  
  export default RootRoute;