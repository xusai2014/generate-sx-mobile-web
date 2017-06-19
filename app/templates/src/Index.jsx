import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory'
import store from '../app/store/store';
import routes  from './Router/Routers';

const history = createBrowserHistory();

ReactDom.render(
    <Provider store={store()}>
        <Router history={history} >
            {routes}
        </Router>
    </Provider>
    , document.getElementById('content'));
