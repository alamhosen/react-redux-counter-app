import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreamentCounter, increamentCounter, resetCounter } from '../redux-services/actions/counterAction';

const Counter = () => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch()

    const handleIncrement = () =>{
        dispatch(increamentCounter());
    }
    const handleDecrement = () =>{
        dispatch(decreamentCounter())
    }
    const handleReset = () =>{
        dispatch(resetCounter());
    }

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increament</button>
            <button onClick={handleDecrement}>Decreament</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

// Steps:
// 1. state - count : 0
// 2. actions - Increment, Decrement, Reset
// 3. reducer - Increment - count => count + 1
// - Decrement - count => count - install 1
// - Reset - count => 0
// 4. store
// 5. providing store in react
// 6. use store