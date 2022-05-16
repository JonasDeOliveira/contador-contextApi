import React, { useContext } from 'react'
import {CounterContext} from '../context/Counter.provider'

function Other(props) {

    const { number } = useContext(CounterContext)

    return(
        <>
        <div>Other</div>
        <h2>{number}</h2>
        </>
    )
}

export default Other