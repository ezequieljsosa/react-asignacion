import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import * as accionesTareas from "../actions/tareas";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import AsignacionRow from "../components/AsignacionRow";


const ListaTareas = ({personas, tareas,actions}) => {

    const [textFilter, setFiltroTexto] = useState("");
    const [estadoFilter, setFiltroEstadoTarea] = useState(""); //por ahora ni estas la pantalla

    useEffect(() => {
        setFiltroTexto(localStorage.getItem("textFilter"))
    },[])

    let tareasFiltradas = tareas;
    // if (filtros.estado) {
    //     tareasFiltradas = tareasFiltradas.filter(x => x.estado === filtros.estado)
    // }
    if (textFilter) {
        tareasFiltradas = tareasFiltradas.filter(tarea => tarea.description.includes(textFilter))
    }

    const actualizarFiltroTexto = (e) => {
        setFiltroTexto(e.target.value)
        localStorage.setItem("textFilter",e.target.value)
    }
    const cambiarTareaAsignada = (tarea,nombrePersona) => {
        actions.tareaAsignada(tarea, nombrePersona);
    }

    return <div>
        Buscar: <input type="text" value={textFilter} onChange={actualizarFiltroTexto}/>
        <br/>

        {tareasFiltradas ? tareasFiltradas.map((tarea, key) => <p key={key}>
            <AsignacionRow tarea={tarea} />
            <select value={tarea.asignadaA} onChange={(e) => cambiarTareaAsignada(
                tarea,e.target.value
            )}>
                <option value=""></option>
                {personas.map((p, key) => <option key={key} value={p.nombre}>{p.nombre}</option>)}
            </select>
        </p>) : "No hay tareas"}
    </div>
}

const mapStateToProps = (state, props) => ({
    personas: state.personas, tareas: state.tareas
})
function mapDispatchToProps (dispatch){
    return {
        actions: bindActionCreators(accionesTareas,dispatch)
    }
}

const ConnectedListaTareas = connect(mapStateToProps,mapDispatchToProps)(ListaTareas);

export default ConnectedListaTareas

