import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../context/Counter.provider'

function Home(props) {

    const { number, decreaseNumber, increaseNumber } = useContext(CounterContext)

    return(
        <>
        <button onClick={decreaseNumber}>-</button>
        <h2>{number}</h2>
        <button onClick={increaseNumber}>+</button>
        <br/>
        <Link to="other">Ir para outra página</Link>
        </>
    )
}

export default Home