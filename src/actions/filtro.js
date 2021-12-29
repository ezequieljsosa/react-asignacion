export const setText = (text = '') => {
    return {type: "SET_TEXT", text}
}
export const setStatus = (status) => {
    return {type: "SET_STATUS", status}
}