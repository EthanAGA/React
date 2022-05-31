import logo from './logo.svg';
import "./App.css";
import React, {useState} from 'react';
function Counter(){
    const [counter, setCounter] = useState (0);
    const sumarClick = () => {
        setCounter (counter + 1);
    }
    return (
        <div className="text center mt-4">
            <h1>Contador</h1>
            <p>{counter}</p>
            <button onClick={sumarClick} className="btn btn-primary">Clickea aquí para sumar</button>
        </div>        
    )
}
function App(){
    return (
        <div className="App">
           <Counter />
        </div>
    );
}
export default App;
