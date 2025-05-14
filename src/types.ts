export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// add todo
export interface AddTodoProps {
    onAddTodo: (text: string) => void;
}

// complete todo
export interface CompleteTodoProps {
    todo: Todo;
    onComplete: (id: number) => void;
}


// edit todo
export interface TodoItemProps {
    todo: Todo;
    onToggleComplete: (id: number) => void;
    onEditTodo: (id: number, newText: string) => void;
    onDeleteTodo: (id: number) => void;
}

// delete todo
export interface TodoListProps {
    todos: Todo[];
    onToggleComplete: (id: number) => void;
    onEditTodo: (id: number, newText: string) => void;
    onDeleteTodo: (id: number) => void;
}