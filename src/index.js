import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//rootReducer is combineReducer
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

//logger is middleware
const logger = (store) => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));