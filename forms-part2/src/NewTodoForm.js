import React, { useState } from 'react'

const NewTodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (task.trim() !== "") {
            addTodo(task);
            setTask("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    );
}


export default NewTodoForm;

