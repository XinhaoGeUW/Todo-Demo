import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'
import Todo from './Todo'

const TodoList = () => {
  const { todos } = useContext(TodosContext)

  return (
    <div>
      {todos.length ? (
         <ul className="list">
         {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
       </ul>
      ) : (
        <div> No Todos</div>
      )
    }
    </div>
  )
}

export default TodoList
