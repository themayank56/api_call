import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addbutton} from '../action/Action'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Display from './Display';
function Todo() {
    const [data, setData] = useState()
    const mydata = useSelector((state) => state.todo1.item_list);
    const dispatch = useDispatch();
    return (
          <div className="body">
            <div className="main_div">
              <div className="center_div">
                <div className="Add_item">
                  <h1>Add your Item</h1>
                </div>
                <div id="search">
                  <input 
                      type="text" 
                      name="search" 
                      placeholder="Add Item" 
                      value={data}
                      onChange={(event) => setData(event.target.value)}    
                  /> 
                  <i onClick={() => dispatch(addbutton(data),setData(''))} className="fas fa-plus"></i>
                  <div className="icons">  
                  </div>  
                </div>
              </div>
              
            </div>
            <div className="">
                <Router>
                <div>
                  <div className="add_button">
                    <NavLink className="navlink " to="/display" exact>
                      <button type="button" className="btn btn-outline-success">Display</button>
                    </NavLink>
                  </div>    
                </div>
                  <Switch>
                    <Route exact path="/display" component={Display} />
                  </Switch>
                </Router>
              </div>
          </div>
        
    )
}

export default Todo;