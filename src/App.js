import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Tablero from './pages/Tablero'
import ListaPersonas from "./pages/ListaPersonas";
import ListaTareas from "./pages/ListaTareas";
import Header from './components/Header'

class App extends React.Component {
    state = {
        personas: [{id: 1, nombre: "Eze", disponible: true, tareas: ["tarea 1"]},
            {id: 2, nombre: "jorge", disponible: false, tareas: []}, {
                id: 3,
                nombre: "Roberto",
                disponible: true, tareas: ["tarea 3"]
            }],
        tareas: [{description: "tarea 1", estado: "NoAsignada"},
            {description: "tarea 2", estado: "Asignada", asignadaA: "Eze"},
            {description: "tarea 3", estado: "Asignada", asignadaA: "Roberto"},
            {description: "tarea 4", estado: "Terminada", asignadaA: "Roberto"},],
        filtros: {
            estado: "",
            texto: ""
        }
    }

    handleTareaAsignada = (tarea, persona) => {

        this.setState((prevState) => {
            const tareas = prevState.tareas.filter((x) => x.description !== tarea.description)
            tarea.asignadaA = persona
            return {tareas: tareas.concat(tarea)}
        })

    }
    handleActualizarFiltro = (textValue) => {
        console.log(textValue)
        this.setState((prevState) => {
            return {filtros: {...prevState.filtro, text: textValue}}
        })
    }

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" exact={true}
                               element={<Tablero personas={this.state.personas} tareas={this.state.tareas}/>}/>
                        <Route path="/personas" element={<ListaPersonas personas={this.state.personas}/>}/>
                        <Route path="/tareas" element={<ListaTareas tareaAsignada={this.handleTareaAsignada}
                                                                    personas={this.state.personas}
                                                                    tareas={this.state.tareas}
                                                                    filtros={this.state.filtros}
                                                                    actualizarFiltro={this.handleActualizarFiltro}
                        />}/>
                    </Routes>
                </BrowserRouter>

            </div>
        )
    }
}

export default App;
