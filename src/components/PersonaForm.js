import React from 'react'
import {addPersona} from "../actions/personas";
import {connect} from "react-redux";
import {erroresReducer} from "../reducer/errores";

class PersonaForm extends React.Component {

    state = {
        nombre: (this.props.persona) ? this.props.persona.nombre : ""
    }
    onNombreChange = (e) => {
        this.setState({nombre: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
                ...this.props.persona,
            nombre: this.state.nombre});
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            {this.props.error && <p style={{backgroundColor:"red"}}> {this.props.error}</p> }
            Nombre: <input name="nombre" value={this.state.nombre}
                           onChange={this.onNombreChange}/><br/>
            <button type="submit"> {this.props.textSubmit}</button>
        </form>
    }
}

const mapStateToProps = (state, props) => ({error: state.errores.personaError})


const ConnectedPersonaForm = connect(mapStateToProps)(PersonaForm)

export default ConnectedPersonaForm