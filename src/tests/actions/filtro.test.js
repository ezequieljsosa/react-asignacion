// export const setText = (text = '') => {
//     return {type: "SET_TEXT", text}
// }

import {setText} from "../../actions/filtro";

test("crear la accion de setear el texto", () => {
    const accion = setText("tarea")
    expect(accion).toEqual({type: "SET_TEXT", text: "tarea"})
})

test("probar la accion de limpiar el filtro", () => {
    const accion = setText()
    expect(accion).toEqual({type: "SET_TEXT", text: ""})
})