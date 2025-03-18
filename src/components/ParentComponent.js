import React from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends React.Component{
      constructor(){
        super()
        this.state = {
            parentName : "parent,"
        }
      }

      greetParent = (childName) =>{
          alert(`Hello ${this.state.parentName} ${childName}`)
      }
    render(){
        return(
            <div>
                <ChildComponent greetParent = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent