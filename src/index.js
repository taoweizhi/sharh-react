import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WrappedAuthentication from './layouts/Authentication'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WrappedAuthentication />, document.getElementById('root'));
registerServiceWorker();
