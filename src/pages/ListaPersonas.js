import React, {useEffect} from "react";
import {connect} from "react-redux";

import PersonaRow from "../components/PersonaRow";
import PersonaForm from "../components/PersonaForm";
import * as actionPersonas  from "../actions/personas";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import {apiAddPersona} from "../actions/personas";


const ListaPersonas = ({personas, actions}) => {

    useEffect( () => {
        actions.apiInitPersonas()
    },[])

    const agregarPersona = (persona) => {
        actions.apiAddPersona(persona)
    }
    return <div>
        <PersonaForm textSubmit="Agregar" onSubmit={agregarPersona}/>
        {personas ? <table>
            <tbody>
            {personas.map((persona, key) => <PersonaRow key={key} persona={persona}/>)}
            </tbody>
        </table> : "No hay personas"}

    </div>
}


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionPersonas,dispatch)
})

const mapStateToProps = (state) => ({personas: state.personas})
const ConnectedListaPersonas = connect(mapStateToProps,mapDispatchToProps)(ListaPersonas)

export default ConnectedListaPersonas

