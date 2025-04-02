import React, { useState } from 'react'


const TodoList = () =>{
    const [inputValue, setInputValue] = useState('');
    const [todo,setTodo] = useState([])
    const [editIndex,setEditIndex] = useState(null)
    


    const changeHandler = (e) =>{
        setInputValue(e.target.value)
    }

    const submitHandler = () =>{
        if(inputValue.trim() !=""){
            setTodo([...todo,inputValue])
            setInputValue("")

        }
        
    }
  
    const editHandler = (todoIndex) => {
        const todoToEdit = todo[todoIndex];
        setInputValue(todoToEdit);
        setEditIndex(todoIndex);
    };

    const deleteHandler = (todoIndex) =>{
        const updatedValue = todo.filter((_, index)=> index !==todoIndex)
        setTodo(updatedValue)
    }

    return(
        <div>
           <input type = "text" value={inputValue} onChange={changeHandler} />
           <button onClick={submitHandler}>Add</button>
           <ul>
           {todo.map((todo,index) =>(
                <li key={index}>{todo}
                <button onClick={() => editHandler(index)}>Edit</button>
                <button onClick={() => deleteHandler(index)}>Delete</button>
                </li>
               
             ))}
           </ul>
            

        </div>
    )
}

export default TodoList