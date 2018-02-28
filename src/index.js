import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import WrappedAuthentication from './containers/Authentication'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WrappedAuthentication />, document.getElementById('root'));
registerServiceWorker();
