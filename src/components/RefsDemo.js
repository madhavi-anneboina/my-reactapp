import React from "react";



class RefsDemo extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()

        console.log(this.inputRef.current)
    }
    clickHandler = () =>{
        console.log(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
              <input type ="text" ref={this.inputRef} />
              <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default RefsDemo