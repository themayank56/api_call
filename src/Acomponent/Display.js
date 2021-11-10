import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {deletebutton} from '../action/Action'
function Display() {
    const mydata = useSelector((state) => state.todo1.item_list);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="center_div">
            {
                mydata.map((elem, index) => {
                    return(
                        <>
                        <div className="delete_item1">
                          <h1>{elem}
                            <i onClick={() => dispatch(deletebutton(index))} className="fas fa-trash-alt"></i>
                          </h1> 
                        </div> 
                       </>
                    )
                })
              }            
            </div>
        </div>
    )
}

export default Display


