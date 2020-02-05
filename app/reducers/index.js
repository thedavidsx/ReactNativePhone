// Imports: Reducers
import auth from './auth';
import common from './common';
import call from './call';
import navigation from './navigation';
import { reducer as formReducer } from 'redux-form';

// Redux: Root Reducer
const rootReducer = {
  auth: auth,
  common: common,
  call : call,
  form: formReducer,
  navigation: navigation,
};

// Exports
export default rootReducer;