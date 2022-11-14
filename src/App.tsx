import { useState, useEffect } from "react";
import { Todo } from "./types";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import "./App.css";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: new Date().toString(),
            title: text,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (todoId: string) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todoId) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const deleteTodo = (todoId: string) => {
        setTodos(
            todos.filter((item) => {
                return item.id !== todoId;
            })
        );
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data: Todo[]) => {
                setTodos(data);
            });
    }, []);

    return (
        <div className="App">
            <NewTodoForm handleClick={addTodo} />
            <TodoList
                taskList={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App;
