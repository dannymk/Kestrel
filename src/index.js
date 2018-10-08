import React from 'react';
import {render} from 'react-dom';
import App from './components/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

render(<App />, document.getElementById('root'));

registerServiceWorker();
