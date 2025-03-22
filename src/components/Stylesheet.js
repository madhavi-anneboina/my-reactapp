import React from "react";
import './styles.css'

const Stylesheet = () =>{

    const heading  = {
        color : "blue",
        fontSize : "25px"
    }
    return(
        <div>
            <p className="primary">Stlesheet</p>
            <h1 style={heading}>Imline styles</h1>
        </div>
         
    )
}

export default Stylesheet