import { useState } from "react";

const User = ({name,work,location}) =>{
    
    let [count,setCount] = useState(0)
    
    
    return (
        <div className="user-card">
             <h1> Count1 : {count}</h1>
             <button onClick={()=>{
                setCount(count + 1)
             }}>Count++</button>
            <button onClick={()=>{
                setCount(count  = 0)
             }}>Reset</button>
            <h1>{name}</h1>
            <h2>{work}</h2>
            <h2>{location} </h2>
            <h2>Instagran : @manim468</h2>
        </div>
    );
};




export default User;