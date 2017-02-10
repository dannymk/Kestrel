import { combineReducers } from 'redux';

import {errors} from './errors';
import {anything} from './amid';

const rootReducer = combineReducers({
  errors: errors,
  greetings: anything
});

export default rootReducer;