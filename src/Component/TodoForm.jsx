import React ,{useState} from "react";

const TodoForm=({addTodo})=>{
    const[value,setvalue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
      addTodo(value);
      //to make input field clear after add task
      setvalue("")

    }
    return(
        <form className="todo-form"  onSubmit={handleSubmit}>
            <input   type="text" className="todo-input"  value={value} placeholder="What is the task today?" onChange={(e)=>
                setvalue(e.target.value)} />

            <button type="submit" className="todo-btn">Add Task </button>
        </form>
    )
};
export default TodoForm;