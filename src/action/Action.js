export const addbutton = (value) => {
    return{
        type: "ADD_BUTTON",
        value:value
    }
}
export const deletebutton = (id) => {
    return{
        type: "DELETE_BUTTON",
        id:id
    }
}