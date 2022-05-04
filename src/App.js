import './App.css';
import {store} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {counterReducer} from "./store/reducer";

function App() {
    const value = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({type: 'counter/incremented'})
    }
    const decrement = () => {
        dispatch({type: 'counter/decremented'})
    }

    return (
        <div className="App">
            <div className="equals">{value}</div>
            <div className="buttonsContainer">
                <div className="button" onClick={increment}>+</div>
                <div className="button" onClick={decrement}>-</div>
            </div>
        </div>
    );
}

export default App;
