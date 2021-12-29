const erroresReducerDefaultState = {}

export const erroresReducer = (state = erroresReducerDefaultState, action) => {

    switch (action.type) {
        case "ERROR_PERSONA":

            return {...state, personaError: action.txt}
        default:
            return {...state,personaError:""}
    }

}