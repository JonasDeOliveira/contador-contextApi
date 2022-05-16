import React, { useState, createContext } from 'react'; 

export const CounterContext = createContext({})

function CounterProvider(props) {

    const [number, setNumber] = useState(0)

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const decreaseNumber = () => {
        setNumber(number - 1)
    }

    return (
        <CounterContext.Provider value={{number, decreaseNumber, increaseNumber}}>
            {props.children}
        </CounterContext.Provider>
    )
    
}

export default CounterProvider