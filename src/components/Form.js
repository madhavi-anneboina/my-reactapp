import React, { Component } from 'react'

 class Form extends Component {
    constructor(){
        super()
        this.state = {
            username :'',
            textarea :'',
            topic : 'react'
        }
    }

    changeHandler  = (e) =>{
        const { name, value } = e.target;
         this.setState({[name] :value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(`${this.state.username} ${this.state.textarea} ${this.state.topic}`)
    }

  render() {
    const {username,textarea,topic} = this.state
    return (
       <form onSubmit={this.submitHandler}>
        <div>
            <label htmlFor='username'>Username</label> 
            <input type="text"   name="username" value = {username} onChange={this.changeHandler}/>
        </div>
        <div>
            <label htmlFor='textarea' >Comments</label>
            <textarea  name="textarea" value={textarea}  onChange={this.changeHandler} ></textarea>
        </div>

        <div>
            <label htmlFor='topic'>Topic</label>
            <select name ='topic'value={topic} onChange={this.changeHandler}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button>Submit </button>
       </form>
    )
  }
}

export default Form
