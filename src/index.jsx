import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */

const airlines = (state = [], action) => {
    if (action.type === 'AIRLINES_ADD') {
        return [...state, action.payload];
    }
    return state;
}


/** TODO: Create store */

// const storeInstance = createStore(airlines, applyMiddleware(logger));
const storeInstance = createStore(
    combineReducers({airlines}), applyMiddleware(logger)
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);