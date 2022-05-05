const initialState = {
    value: 0
}

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return { value: state.value + action.payload }
        case 'decrement':
            return { value: state.value - action.payload }
        default:
            return state
    }
}

export const incrementAC = (value) => {
    return {
        type: "increment",
        payload: value
    }
}
export const decrementAC = (value) => {
    return {
        type: "decrement",
        payload: value
    }
}
