import React from "react";
import { NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <h1>Aplicación de Asignación</h1>
        <NavLink to={"/"}>Tablero</NavLink>
        <NavLink to={"/personas"}>Personas</NavLink>
        <NavLink to={"/tareas"}>Tareas</NavLink>

    </div>
)

export default Header;