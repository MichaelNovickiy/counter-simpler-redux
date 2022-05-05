import { createStore } from 'redux'
import {counterReducer} from "./reducer";


export let store = createStore(counterReducer)
