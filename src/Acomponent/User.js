import React from 'react'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
function User() {
    return (
        <div>
            <h1>User List</h1>
            <Router>
                <div>
                  <div className="add_button">
                    <NavLink className="navlink " to="/page1" exact>
                      <button type="button" className="btn btn-outline-success">Page 1</button>
                    </NavLink>
                    <NavLink className="navlink " to="/page2" exact>
                      <button type="button" className="btn btn-outline-success">Page 2</button>
                    </NavLink>
                  </div>    
                  </div>
                <hr />
                  <Switch>
                    <Route exact path="/page1" component={Page1} />
                    <Route exact path="/page2" component={Page2} />
                    
                  </Switch>
            </Router>
        </div>
    )
}

export default User
