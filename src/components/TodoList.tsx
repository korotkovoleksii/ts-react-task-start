import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";

interface ITodoList {
    taskList: Todo[];
    toggleTodo: (todoId: string) => void;
    deleteTodo: (todoId: string) => void;
}

const TodoList = ({ taskList, toggleTodo, deleteTodo }: ITodoList) => {
    return (
        <div>
            {taskList.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        completed={item.completed}
                        title={item.title}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    ></TodoItem>
                );
            })}
        </div>
    );
};
export default TodoList;
