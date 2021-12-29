export const tareaAsignada = (tarea,persona) => {
    return {
        type: "ASIGNAR_TAREA",
        persona,
        tarea
    }
}