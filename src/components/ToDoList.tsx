interface Todo {
    id: number
    text: string
    completed: boolean
  }

interface TodoListItemProps {
    filteredTodos: Todo[];
    toggleTodo: (id: number) => void;
  }
export const ToDoList = (prop : TodoListItemProps) => {


    return ( 
    <>
    <ul className='todo-list'>{prop.filteredTodos.map(todo => <li className='todo-item' key={todo.id}><input className='todo-checkbox' type="checkbox" checked={todo.completed} onChange={() => prop.toggleTodo(todo.id)}/><span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.completed ? <s>{todo.text}</s> : todo.text}</span></li>)}</ul>
    </>
    )
}