import React from 'react';
import {render} from 'react-dom';
import App from './components/MainContainer';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));

registerServiceWorker();
