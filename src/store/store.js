import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userIPReducer } from './reducers/addDefaultIP';
import { searchResultReducer } from './reducers/searchResultReduser';

const rootReducer = combineReducers({
  search: searchResultReducer,
  defaultIP: userIPReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
