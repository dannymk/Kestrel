import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

import App from './components/Main';

const store = createStore(
   reducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Render the main component into the dom
ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('app'));
