// export const addPersona = ({nombre, disponible = true} = {}) => {
//     return {
//         type: "ADD_PERSONA", persona: {
//             nombre,
//             disponible,
//             tareas: [],
//             id: nombre.replace(" ", "-") + "1"
//         }
//     }
// }

import {addPersona} from "../../actions/personas";

test('crear persona ok', () => {
    const action = addPersona({nombre: "pepe", disponible: false})
    expect(action).toEqual({
        type: "ADD_PERSONA", persona: {
            nombre: "pepe", disponible: false, tareas: [],
            id: expect.any(String)
        }
    })
})

test('crear persona datos default', () => {
    const action = addPersona({nombre: "pepe"})
    expect(action).toEqual({
        type: "ADD_PERSONA", persona: {
            nombre: "pepe", disponible: true, tareas: [],
            id: expect.any(String)
        }
    })
})