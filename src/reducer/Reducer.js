const initialstate ={
    item_list:[]
}
const itemreducer = (state=initialstate, action) => {
    switch(action.type){
        case "ADD_BUTTON":
            return{
                ...state,
                item_list:[
                    ...state.item_list,
                    action.value
                ]
            }
        case "DELETE_BUTTON" :
            const newList = state.item_list.filter((elem, index) => {
                return index !== action.id
            })
            return{
                ...state,
                item_list:newList
            }
        default: return state;
    }
}

export default itemreducer;