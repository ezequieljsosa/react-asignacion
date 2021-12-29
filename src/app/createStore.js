import {combineReducers, createStore, applyMiddleware} from "redux";
import {filtroReducer} from '../reducer/filtro';
import {personasReducer} from '../reducer/personas';
import {tareasReducer} from "../reducer/tareas";
import {checkPerson,apiPersona} from "../middlewares/persona";
import {erroresReducer} from "../reducer/errores";


const cs = () => createStore(combineReducers(
    {
        filter: filtroReducer,
        personas: personasReducer,
        tareas: tareasReducer,
        errores: erroresReducer
    }), {}, applyMiddleware(checkPerson,apiPersona)
);
export default cs