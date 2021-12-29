import {v4 as uuid} from 'uuid';

export const addPersona = ({nombre, disponible = true} = {}) => {
    return {
        type: "ADD_PERSONA", persona: {
            nombre,
            disponible,
            tareas: [],
            id: uuid()
        }
    }
}
export const apiAddPersona = ({nombre, disponible = true} = {}) => {
    return {
        type: "API_ADD_PERSONA", persona: {
            nombre,
            disponible,
            tareas: []
        }
    }
}


export const removePersona = (personaId) => {
    return {
        type: "REMOVE_PERSONA", personaId
    }
}

export const apiRemovePersona = (personaId) => {
    return {
        type: "API_REMOVE_PERSONA", personaId
    }
}

export const editPersona = (persona) => {
    return {
        type: "EDIT_PERSONA", persona
    }
}

export const apiInitPersonas = () => {
    return {type: "API_INIT_PERSONAS"}
}

export const initPersonas = (personas) => {
    return {type: "INIT_PERSONAS",personas}
}