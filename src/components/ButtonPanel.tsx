import { useState } from 'react';
interface Todo {
    id: number
    text: string
    completed: boolean
  }
interface ButtonPanelProps {
    todos: Todo[];
    clearCompleted: () => void;
}
export const ButtonPanel = (prop:ButtonPanelProps) => {
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
    return (
        <>
        <div className='todo-footer'>
          <span>{prop.todos.filter(todo => !todo.completed).length} items left</span>
          <div className='todo-footer_container-buttons'>
          <button className={`todo-footer_button ${filter === "all" ? "selected" : ""}`} onClick={() => {setFilter("all")}}>All</button>
          <button className={`todo-footer_button ${filter === "active" ? "selected" : ""}`} onClick={() => {setFilter("active")}}>Active</button>
          <button className={`todo-footer_button ${filter === "completed" ? "selected" : ""}`} onClick={() => {setFilter("completed")}}>Completed</button>
          </div>
          <button className='todo-footer_button' onClick={prop.clearCompleted}>Clear completed</button>
        </div>
        </>
    )
}