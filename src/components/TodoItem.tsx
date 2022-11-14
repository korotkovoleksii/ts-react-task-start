import React from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
    style?: React.CSSProperties;
    toggleTodo: (todoId: string) => void;
    deleteTodo: (todoId: string) => void;
}

const TodoItem = ({
    id,
    title,
    completed,
    style = {},
    toggleTodo,
    deleteTodo,
}: TodoItemProps) => {
    return (
        <li style={style}>
            <input
                onClick={() => toggleTodo(id)}
                onChange={(e) => {}}
                type="checkbox"
                checked={completed}
            />
            <span>{title}</span>
            <span onClick={() => deleteTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;
