import React from "react";


export default class Tablero extends React.Component {
    render() {
        return <div>
            <table>
                <tr>
                    <td>Tareas Totales</td>
                    <td>{this.props.tareas.length}</td>
                </tr>
                <tr>
                    <td>Tareas Asignadas</td>
                    <td>{this.props.tareas.filter(x => x.estado === "Asignada").length}</td>
                </tr>
                <tr>
                    <td>Tareas Terminadas</td>
                    <td>{this.props.tareas.filter(x => x.estado === "Terminada").length}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>Personas Totales</td>
                    <td>{this.props.personas.length}</td>
                </tr>
                <tr>
                    <td>Personas Ocupadas</td>
                    <td>{this.props.personas.filter(x => x.tareas.length > 0).length}</td>
                </tr>
            </table>
        </div>
    }
}
