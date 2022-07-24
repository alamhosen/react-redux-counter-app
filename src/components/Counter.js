import React from 'react';

const Counter = () => {

    const handleIncrement = () =>{

    }

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: 0</h3>
            <button onClick={handleIncrement}>Increament</button>
        </div>
    );
};

export default Counter;

// Steps:
// 1. state - count : 0
// 2. actions - Increment, Decrement, Reset
// 3. reducer - Increment - count => count + 1
// - Decrement - count => count - 1
// - Reset - count => 0
// 4. store