import { useState } from "react"
import type { AddTodoProps } from "../types"


export const TodoForm = ({ onAddTodo }: AddTodoProps) => {
    const [text, setText] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim() === "") return;
        console.log("Todo vừa nhập:", text)
        onAddTodo(text)
        setText("")
    }

    return (
        <form onSubmit={handleSubmit} className="mt-12 flex gap-4 mb-4">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a todo" className="w-full px-4 py-2 border-b-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition duration-200" />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">Add</button>
        </form>
    )
}
