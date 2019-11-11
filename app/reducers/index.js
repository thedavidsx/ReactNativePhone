// Imports: Reducers
import auth from './auth';
import common from './common';
import call from './call';
import { reducer as formReducer } from 'redux-form';

// Redux: Root Reducer
const rootReducer = {
  auth: auth,
  common: common,
  call : call,
  form: formReducer
};

// Exports
export default rootReducer;