import React from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter, Switch} from 'react-router-dom';
import Bundle from './DynamicRoute';
import Base from '../Components/BaseApplication.jsx';
import NoMatch from '../Components/NotFoundPage'
import loadLogin from 'bundle-loader?lazy!../Pages/PublicPages/Login.jsx'

const Login = (props) => (
  <Bundle load={loadLogin}>
    {(About) => <About {...props}/>}
  </Bundle>
)


export default (
    <BrowserRouter basename={'app'} >
      <Switch>
        <Route path="/account/login" component={Login} />
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
)


