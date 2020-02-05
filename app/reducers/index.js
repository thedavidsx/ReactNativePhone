// Imports: Reducers
import auth from './auth';
import common from './common';
import call from './call';
import pjsip from './pjsip';
import navigation from './navigation';
import { reducer as formReducer } from 'redux-form';

// Redux: Root Reducer
const rootReducer = {
  auth: auth,
  common: common,
  call : call,
  form: formReducer,
  pjsip: pjsip,
  navigation: navigation,
};

// Exports
export default rootReducer;