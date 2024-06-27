import { useState } from "react";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue }]);
            setInputValue('');
        }
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="shadow-lg w-min mx-auto max-w-md bg-white p-10 rounded-lg mt-6">
            <div className="flex mb-10">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow p-2 border border-darkBlue rounded-lg px-3 mr-3"
                    placeholder="Add a new to-do"
                />
                <button onClick={addTodo}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >Add</button>
            </div>
            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
