import React, { useState } from 'react'


const TodoList = () =>{
    const [inputValue, setInputValue] = useState('');
    const [todo,setTodo] = useState([])

    const changeHandler = (e) =>{
        setInputValue(e.target.value)
    }

    const submitHandler = () =>{
        if(inputValue.trim() !=""){
            setTodo([...todo,inputValue])
            setInputValue("")

        }
        
    }

    return(
        <div>
           
           <input type = "text" value={inputValue} onChange={changeHandler} />
           <button onClick={submitHandler}>Add</button>
           <ul>
           {todo.map((todo,index) =>(
                <li key={index}>{todo}</li>
               
             ))}
           </ul>
            

        </div>
    )
}

export default TodoList