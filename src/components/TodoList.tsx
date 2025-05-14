
import type { TodoListProps } from '../types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onEditTodo, onDeleteTodo }: TodoListProps) => {
    return (
        <ul className="mt-4 bg-white shadow-md rounded-lg p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onEditTodo={onEditTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
