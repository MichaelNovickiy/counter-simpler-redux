import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrementAC, incrementAC} from "./store/reducer";

function App() {
    const value = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const increment = () => {
       let valueIncrement = prompt()
        dispatch(incrementAC(Number(valueIncrement)))
    }
    const decrement = () => {
        let valueDecrement = prompt()
        dispatch(decrementAC(Number(valueDecrement)))
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
