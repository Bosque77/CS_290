import React from "react";
import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const SelectQuantity = () => {
    const [counter, setCounter] = useState(0)


    const incrementCounter = () => {
        if (counter < 10){
            setCounter(counter+1)
        }
    }

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter(counter -1)
        }
    }

    return(
        <>
        {counter} <AiOutlineArrowUp onClick={ incrementCounter } /> <AiOutlineArrowDown onClick={decrementCounter}/>
        </>
    )
}



export default SelectQuantity