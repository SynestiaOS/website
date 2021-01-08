import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {render} from 'react-snapshot';
import "./i18n"
import {applyMiddleware, createStore} from "redux";
import KanbanReducer from "./reducers/kanbanReducer";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

const store = createStore(
    KanbanReducer,
    applyMiddleware(thunk)
);

render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
