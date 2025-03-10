import React from "react";

const Greet = ({name,children}) =>{
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>{children}</p>
        </div>
    )
}

export default Greet