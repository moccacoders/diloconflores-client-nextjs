import React, { useState } from "react"

const Timeline = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count <= 0 ? 0 : count - 1)
    }
    return (
        <>
            <p>
                Esta es una cuenta de : <span>{count}</span>
            </p>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </>
    )
}

export default Timeline
