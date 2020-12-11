import React, { useState } from 'react';

function CounterExample(){
    const[count, setCount] = useState(0)
    return(
        <div>
            <h1>
                {count}
            </h1>

            <h2 onClick = {() => setCount(count + 1)} className="text-blue-500" >
                Plus
            </h2>

            <h3 onClick = {() => setCount(count - 1)}>
                Minus
            </h3>


        </div>
    )
}

export default CounterExample