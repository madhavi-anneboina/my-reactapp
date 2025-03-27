import React from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";


class PareComp extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            name: "Penchallammaa"
        }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: "Penchallammaa"
            })

        },2000)

    }
    render(){
        console.log("Parent component Render")
        return(
            <div>
               this is from Pare Component 
               <MemoComp name ={this.state.name}/>
                {/* <RegComp  name={this.state.name}/>
                <PureComp name ={this.state.name} /> */}
             </div>
        )
    }
}


export default PareComp