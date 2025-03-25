import React from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : "madhvai"
        }
        console.log("Life cycle A Constructor")
    }
static getDerivedStateFromProps(state,props){
    console.log("Life Cycle A getDerivedStateFromProps")
    return null
}

componentDidMount () {
    console.log("Life cycle A componentDidmount")
}

shouldComponentUpdate(){
    console.log("Life cycle A shouldComponentUpdate")
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Life cycle A getSnapshotBeforeUpdate")
    return null
}

componentDidUpdate(){
    console.log("Life cycle A componentDidUpdate")
}
chageState = () =>{
    this.setState({name:"Ramanimadhura"})
}

  render() {
    console.log("Life Cycle A render Method")
    return <div>
        <button onClick={this.chageState}>Change state</button>
         <LifeCycleB />
    </div>;
  }
}

export default LifeCycleA 