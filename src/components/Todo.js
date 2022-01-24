import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

const Todo = props => {
  const { removeTodo, findTodo } = useContext(TodosContext)

  return (
    <li>
      <span> {props.todo.title} </span>
      <div>
        <button onClick={() => findTodo(props.todo.id)}> edit </button>
        <button onClick={() => removeTodo(props.todo.id)}>delete</button>
      </div>
    </li>
  )
}

export default Todo
