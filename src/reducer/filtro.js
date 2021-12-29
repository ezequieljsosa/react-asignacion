const filtroReducerDefault = {
    text: "", status: ""
};
export const filtroReducer = (state = filtroReducerDefault, action) => {

    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }

}