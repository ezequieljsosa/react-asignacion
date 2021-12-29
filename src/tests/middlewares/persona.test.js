import {checkPerson} from "../../middlewares/persona";
import {personas} from "../fixtures/personas";

let action, getState, next, dispatch;

beforeEach(() => {
    action = {type: "ADD_PERSONA", persona: {nombre: "pepe"}}
    getState = () => ({personas: personas})
    dispatch = jest.fn();
    next = jest.fn();
})


test('despachar accion si la persona esta repetida', () => {

    checkPerson({dispatch, getState})(next)(action)

    expect(dispatch).toHaveBeenCalledWith({type: "ERROR_PERSONA", txt: "REPETIDO"});
    expect(next).not.toHaveBeenCalled();
})

test('siguiente middleware si la persona no estaba', () => {

    action.persona.nombre = "pepe1"

    checkPerson({dispatch, getState})(next)(action)

    expect(dispatch).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(action);
})