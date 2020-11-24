import React, {useState} from 'react'

function Hookcounter(props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}> count {count}</button>
        </>
    )
}

export default Hookcounter