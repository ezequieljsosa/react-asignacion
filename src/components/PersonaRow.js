import React from 'react'
import {connect} from "react-redux";
import * as apiPersona from "../actions/personas";
import {Link} from "react-router-dom";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";



const PersonaRow = ({persona,actions}) => {
    const borrarPersona = () => {
        if(window.confirm(`esta seguro de borrar ${persona.nombre}?`)) {
            actions.apiRemovePersona(persona.id)
        }

    }
    return (
        <tr>
            <td>{persona.nombre}</td>
            <td> {persona.disponible && "X"}</td>
            <td><button onClick={ borrarPersona }> Borrar</button> </td>
            <td> <Link to={`/personas/${persona.id}/edit`} >Editar</Link> </td>
        </tr>
    )

}

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(apiPersona,dispatch)})

const ConnectedPersonaRow = connect(undefined,mapDispatchToProps)(PersonaRow)

export {ConnectedPersonaRow as default}