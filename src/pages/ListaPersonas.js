import React from "react";

const ListaPersonas = ({personas}) => (<div>
    {personas ? personas.map((persona,key) => <p key={key}> {persona.nombre } {persona.disponible } </p>) : "No hay personas"}
</div>)

export  default ListaPersonas

