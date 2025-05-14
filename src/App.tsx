import { useState, useEffect } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';
import type { Todo } from './types';


function App() {
  // Khởi tạo state để lưu trữ danh sách todo
  const [todos, setTodos] = useState<Todo[]>([]);

  // Hàm thêm todo mới vào danh sách todos
  const handleAddTodo = (text: string) => {
    // Tạo một todo mới với id là thời gian hiện tại (đảm bảo uniqueness), text và trạng thái completed ban đầu là false
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    // Cập nhật lại danh sách todos bằng cách thêm todo mới vào mảng cũ
    setTodos([...todos, newTodo]);
  };

  // useEffect để đọc dữ liệu todos từ localStorage khi component được render lần đầu tiên
  useEffect(() => {
    const stored = localStorage.getItem('todos'); // Lấy dữ liệu todos từ localStorage
    if (stored) {
      // Nếu có dữ liệu trong localStorage, chuyển dữ liệu đó thành mảng todo và cập nhật state todos
      try {
        setTodos(JSON.parse(stored)); // Chuyển chuỗi JSON thành mảng todo
      } catch (error) {
        // Nếu có lỗi trong quá trình parse (dữ liệu không hợp lệ), ghi lỗi ra console
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []); // Chỉ chạy một lần khi component được mount

  // useEffect để lưu danh sách todos vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    if (todos.length > 0) {
      // Lưu danh sách todos vào localStorage dưới dạng chuỗi JSON
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]); // Chạy khi state todos thay đổi

  // Hàm thay đổi trạng thái hoàn thành của todo (toggle completed)
  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Hàm chỉnh sửa todo (thay đổi text của todo)
  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Hàm xóa todo khỏi danh sách
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Lọc bỏ todo có id trùng với id cần xóa
  };

  return (
    <div className='h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 relative overflow-hidden'>
      <div className='px-8 pt-5 md:px-40'>
        {/* Header chứa tiêu đề ứng dụng */}
        <header className='bg-gray-200 p-5 rounded-lg shadow-md'>
          <h2 className='text-center text-2xl font-bold'>Todo App</h2>
        </header>

        {/* Form để thêm todo mới */}
        <TodoForm onAddTodo={handleAddTodo} />
        {/* Danh sách todo với các hành động: đánh dấu hoàn thành, chỉnh sửa, xóa */}
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onEditTodo={editTodo}
          onDeleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
