const tareasReducerDefaultState = [{description: "tarea 1", estado: "NoAsignada"},
    {description: "tarea 2", estado: "Asignada", asignadaA: "Eze"},
    {description: "tarea 3", estado: "Asignada", asignadaA: "Roberto"},
    {description: "tarea 4", estado: "Terminada", asignadaA: "Roberto"},];

// handleTareaAsignada = (tarea, persona) => {
//
//     this.setState((prevState) => {
//         const tareas = prevState.tareas.filter((x) => x.description !== tarea.description)
//         tarea.asignadaA = persona
//         return {tareas: tareas.concat(tarea)}
//     })
//
// }
// handleActualizarFiltro = (textValue) => {
//     console.log(textValue)
//     this.setState((prevState) => {
//         return {filtros: {...prevState.filtro, text: textValue}}
//     })
// }

export const tareasReducer = (state = tareasReducerDefaultState, action) => {

    switch (action.type) {
        case "ASIGNAR_TAREA":
            //action.tarea
            //action.persona (texto nombre)

            const tareasSinLaTareaNueva = state.filter(
                x => x.description !== action.tarea.description)
            const tareaModificada = action.tarea;
            action.tarea.asignadaA = action.persona;

            return [...tareasSinLaTareaNueva,
                tareaModificada].sort((a,b
            ) => a.description.localeCompare(b.description) )

        default:
            return state
    }

}