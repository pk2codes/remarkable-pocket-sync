import React from 'react';
import ReactDOM from 'react-dom';
import PocketList from './pocketlist'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from './rootSagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
console.log(store.getState())
sagaMiddleware.run(rootSagas);

ReactDOM.render(
    <Provider store={store}>
        <PocketList/>
    </Provider>,
    document.getElementById('mount-ui')
);

module.hot.accept();