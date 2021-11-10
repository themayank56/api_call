import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import store from './store/Store';
import {Provider} from  "react-redux";

import User from './Acomponent/User';
import Todo from './Acomponent/Todo';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
      <div>
        <div className="add_button">
          <NavLink className="navlink " to="/todo" exact>
            <button type="button" className="btn btn-outline-success"> To-Do</button>
          </NavLink>
          <NavLink className="navlink " to="/user" exact>
            <button type="button" className="btn btn-outline-success">Display User</button>
          </NavLink>
        </div>    
        </div>
      <hr />
        <Switch>
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/user" component={User} />
          
        </Switch>
      </Router>
      </Provider>
    </>
  )
}
