import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import RootRoute from './Router/RootRoute';

ReactDOM.render(<RootRoute />, document.getElementById('root'));
registerServiceWorker();
