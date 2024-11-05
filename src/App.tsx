import { useState } from 'react';
import { ToDoList } from './components/ToDoList';
import { ButtonPanel } from './components/ButtonPanel';

interface Todo {
  id: number
  text: string
  completed: boolean
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newToDo, setNewToDo] = useState('');
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

  const addToDo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newToDo.trim()) {
      setTodos([{ id: Date.now(), text: newToDo, completed: false }, ...todos]);
      setNewToDo('');
    }
  }
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })
  return (
    <>

      <div className="todo-container">
        <div className="todo-container todo-substrate-1"></div>
        <div className="todo-container todo-substrate-2"></div>
        <h1 className="todo-header">todos</h1>
        <form onSubmit={addToDo}>
          <input className='todo-input' type="text" placeholder="What needs to be done?" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />
        </form>
        <ToDoList filteredTodos={filteredTodos} toggleTodo={toggleTodo}></ToDoList>
        <div>
          <div className='todo-footer'>
            <span>{todos.filter(todo => !todo.completed).length} items left</span>
            <div className='todo-footer_container-buttons'>
              <button className={`todo-footer_button ${filter === "all" ? "selected" : ""}`} onClick={() => { setFilter("all") }}>All</button>
              <button className={`todo-footer_button ${filter === "active" ? "selected" : ""}`} onClick={() => { setFilter("active") }}>Active</button>
              <button className={`todo-footer_button ${filter === "completed" ? "selected" : ""}`} onClick={() => { setFilter("completed") }}>Completed</button>
            </div>
            <button className='todo-footer_button' onClick={clearCompleted}>Clear completed</button>
          </div>
        </div>
      </div>

    </>



  );
};

export default App;