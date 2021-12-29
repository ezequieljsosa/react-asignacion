import {addPersona, initPersonas, removePersona} from "../actions/personas";

export const checkPerson = ({dispatch, getState}) => next => action => {
    if (action.type == "API_ADD_PERSONA") {
        if (getState().personas.find(p => p.nombre === action.persona.nombre)) {
            dispatch({type: "ERROR_PERSONA", txt: "REPETIDO"})
            return
        }
    }
    return next(action)
}

export const apiPersona = ({dispatch, getState}) => next => action => {
    if (action.type == "API_ADD_PERSONA") {
        //action.persona
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(action.persona)
        };

        fetch("http://localhost:8080/api/personas", requestOptions).then(
            response => {
                if (response.ok) {
                    response.json().then(data => {
                        const personaOk = {id: data.id, ...action.persona}
                        dispatch(addPersona(personaOk))
                    })
                } else {
                    response.json().then(data => {
                        alert(data.message)
                    })
                }
            }
        )


    }
    if (action.type == "API_INIT_PERSONAS") {
        //action.persona
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        fetch("http://localhost:8080/api/personas", requestOptions).then(
            response => {
                const dato = response.json()
                return dato
            }
        ).then(personas => {
            dispatch(initPersonas(personas))
        })

    }

    if (action.type == "API_REMOVE_PERSONA") {
        //action.persona
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        };
        fetch(`http://localhost:8080/api/personas/${action.personaId}`, requestOptions).then(
            response => {
                const dato = response.json()
                return dato
            }
        ).then(data => {
            dispatch(removePersona(action.personaId))
        })

    }


    return next(action)
}