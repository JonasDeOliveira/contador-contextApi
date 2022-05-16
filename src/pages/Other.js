import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter.provider'

function Other(props) {

    const { number, decreaseNumber, increaseNumber, dobrarValor } = useContext(CounterContext)

    return(
        <>
        <div>Other</div>
        <button onClick={dobrarValor}>2X</button>
        <button onClick={decreaseNumber}>-</button>
        <h2>Number vindo do contexto: {number}</h2>
        <button onClick={increaseNumber}>+</button>
        <br/>
        </>
    )
}

export default Other