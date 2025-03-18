import React from "react";

const ChildComponent = ({greetParent}) => {
  return(
    <div>
       <h1> Greet parent component</h1>
       <button onClick={() => greetParent("iam coming from chid")}> clik me from child </button>
    </div>
  )

}
export default ChildComponent
