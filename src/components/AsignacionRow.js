import React, {useEffect} from "react";

const AsignacionRow = ({tarea,handlerX}) => {
    useEffect(() => {
        console.log(`xxx ${tarea.description}`)
    });
    return <p onClick={handlerX}>
        {tarea.description} {tarea.estado}
    </p>
}
const shouldUpdate = (prevProps,props) => {
    return prevProps.tarea.description === props.tarea.description;
}
const AsignacionRowMemo = React.memo(AsignacionRow,shouldUpdate)
export default AsignacionRowMemo;