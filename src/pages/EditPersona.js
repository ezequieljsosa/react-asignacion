import React from "react";
import PersonaForm from "../components/PersonaForm";
import {connect} from "react-redux";
import {editPersona} from "../actions/personas";

const EditPersona = (props) => {
    const editPersonaHandler = (persona) => {
        const accionPersona = editPersona(persona)
        props.dispatch(accionPersona)
        props.history.push("/personas")
    }

    return <div>
        <PersonaForm onSubmit={editPersonaHandler} textSubmit="Editar"  persona={props.persona} />
    </div>
}

const mapStateToProps = (state, props) => {
    return {
        persona: state.personas.find(x => x.id.toString() === props.match.params.personaId)
    }
}

const ConnectedEditPersona = connect(mapStateToProps)(EditPersona);

export {ConnectedEditPersona as default}