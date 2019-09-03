import { combineReducers } from 'redux';
import Authentication from './authentication';

const appReducers = combineReducers({
    authentication: Authentication
});

export default appReducers;