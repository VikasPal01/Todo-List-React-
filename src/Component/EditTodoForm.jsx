import React,{useState}from "react";


const EditTodoForm=({editTodo, task})=>{
    const[value,setvalue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
      editTodo(value,task.id);
      //to make input field clear after add task
      setvalue("")

    }
    return(
        <form className="todo-form"  onSubmit={handleSubmit}>
            <input   type="text" className="todo-input"  value={value} placeholder="Update task" onChange={(e)=>
                setvalue(e.target.value)} />

            <button type="submit" className="todo-btn">Update </button>
        </form>
    )
};
export default EditTodoForm;