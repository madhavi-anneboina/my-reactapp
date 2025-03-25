import React from "react";

class LifeCycleB extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : "madhvai"
        }
        console.log("Life cycle B Constructor")
    }
static getDerivedStateFromProps(state,props){
    console.log("Life Cycle B getDerivedStateFromProps")
    return null
}

componentDidMount () {
    console.log("Life cycle B componentDidmount")
}

shouldComponentUpdate(){
    console.log("Life cycle B shouldComponentUpdate")
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Life cycle B getSnapshotBeforeUpdate")
    return null
}

componentDidUpdate(){
    console.log("Life cycle B componentDidUpdate")
}

  render() {
    console.log("Life Cycle B render Method")
    return <div>
        <h1>Render MMethod</h1>
    </div>;
  }
}

export default LifeCycleB