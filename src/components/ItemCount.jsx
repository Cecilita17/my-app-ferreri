import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const add = ()=>{
        count > initial && setCount(count - 1)
    };
    
    const subtract = ()=>{
        count < stock && setCount(count + 1)
    };

    return (
        <div style={{ border: "1px solid white", backgroundColor: "grey" , margin: "30px", padding: "5px", width: "100px", height: "70px"}}>
            <div>{count}</div>
            <button onClick={add} style={{width:"30px", height:"20px", backgroundColor:"brown", color:"white", border:"none"}}>-</button>
            <button onClick={subtract} style={{ width: "30px", height: "20px", backgroundColor: "brown", color: "white", border: "none" }}>+</button>
            <div><button onClick={() => onAdd(count)}>Add</button></div>
        </div>
    )

    
};

export default ItemCount

{/* <button onClick={()=>{setCount(count-1)}}disabled={count === initial}></button> */}