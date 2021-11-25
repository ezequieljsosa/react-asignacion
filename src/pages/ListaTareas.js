import React from "react";

const ListaTareas = ({tareaAsignada, personas, tareas, filtros, actualizarFiltro}) => {

    let tareasFiltradas = tareas;
    if (filtros.estado) {
        tareasFiltradas = tareasFiltradas.filter(x => x.estado === filtros.estado)
    }
    if (filtros.text) {
        tareasFiltradas = tareasFiltradas.filter(x => x.description.includes(filtros.text))
    }
    return <div>
        Buscar: <input type="text" value={filtros.text} onChange={(e) => actualizarFiltro(e.target.value)}/>
        <br/>

        {tareasFiltradas ? tareasFiltradas.map((tarea, key) => <p key={key}>
            {tarea.description} {tarea.estado}
            <select value={tarea.asignadaA} onChange={(e) => {
                tareaAsignada(tarea, e.target.value)
            }}>
                <option value=""></option>
                {personas.map((p, key) => <option key={key} value={p.nombre}>{p.nombre}</option>)}
            </select>
        </p>) : "No hay personas"}
    </div>
}

export default ListaTareas

