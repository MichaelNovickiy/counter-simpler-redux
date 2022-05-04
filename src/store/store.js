import { createStore } from 'redux'
import {counterReducer} from "./reducer";


export let store = createStore(counterReducer)



// store.subscribe(() => console.log(store.getState()))
//
//
// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// // {value: 1}