// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
//
// const initialState = {};
//
// const middleware = [thunk];
//
// const store= createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
//
// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk)

const store= createStore(rootReducer, middleware)

export default store;
