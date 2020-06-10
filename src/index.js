import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './css/index.css';
import Application from './js/App.js';
import LoginForm from './js/login_page/login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './js/utils/private_route';
import PublicRoute from './js/utils/public_route';

const routing = (
  <BrowserRouter>
    <div>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Application} />
          <PrivateRoute path="/create" component={Application} />
          <PrivateRoute path="/edit" component={Application} />
          <PublicRoute path="/login" component={LoginForm} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();