import { useState } from 'react';
import type { TodoItemProps } from '../types';

const TodoItem = ({ todo, onToggleComplete, onEditTodo, onDeleteTodo }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if (!editText.trim()) return;
        onEditTodo(todo.id, editText);
        setIsEditing(false);
    };

    return (
        <li className="flex items-center gap-8 mb-2">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                className="w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-2"
            />
            {isEditing ? (
                <input
                    className="py-1 px-3 border-b-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition duration-200 w-full max-w-xs md:max-w-full"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span className={`${todo.completed ? 'line-through' : ''
                    } block overflow-x-auto whitespace-nowrap truncate max-w-xs`}>{todo.text}</span>
            )}
            {isEditing ? (
                <button onClick={handleSave} className="text-green-500 ml-auto text-2xl ri-save-3-fill">
                </button>
            ) : (
                <>
                    <button onClick={() => setIsEditing(true)} className="text-yellow-500 ml-auto text-xl fa-solid fa-pen-to-square">
                    </button>
                    <button onClick={() => onDeleteTodo(todo.id)} className="text-red-500 text-xl fa-solid fa-xmark">
                    </button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
