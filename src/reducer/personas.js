const personasReducerDefaultState = [];

export const personasReducer = (state = personasReducerDefaultState, action) => {

    switch (action.type) {
        case "INIT_PERSONAS":
            return action.personas

        case "ADD_PERSONA":
            return [...state,
                action.persona]
        case "REMOVE_PERSONA":
            return state.filter(persona => persona.id !== action.personaId)

        case "EDIT_PERSONA":
            return  [...state.filter(persona => persona.id !== action.persona.id),
                action.persona
            ]
        default:
            return state
    }

}