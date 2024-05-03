import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    const editTodo = (index, editedText) => {
        console.log("editTodo", index, editedText)
        const updatedTodos = [...todos];
        updatedTodos[index] = { ...updatedTodos[index], text: editedText };
        setTodos(updatedTodos);
    }
    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default TodoState;