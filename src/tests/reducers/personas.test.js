// export const personasReducer = (state = personasReducerDefaultState, action) => {
//
//     switch (action.type) {
//         case "ADD_PERSONA":
//
//             return [...state,
//                 action.persona]

import {personasReducer} from "../../reducer/personas";
import {addPersona} from "../../actions/personas";

test('agregar una persona',() => {
    const action = addPersona({nombre:"pepe"});
    const state = personasReducer([{nombre:"juan"}] , action)

    expect(state).toEqual([{nombre:"juan"},
                        {nombre:"pepe",disponible:true,tareas:[],id:expect.any(String)}])

})