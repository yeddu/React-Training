import React, {useState} from 'react'

 function Hookcounter2(props) {
     const initalCount = 0
     const [count , setCount] = useState(initalCount)
    
    return (
        <>
            Count : {count}
            <button onClick={() => setCount(initalCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </>
    )
}
export default Hookcounter2