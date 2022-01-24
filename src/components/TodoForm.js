import React, { useContext, useEffect, useState } from 'react'
import { TodosContext } from '../context/TodosContext'


const TodoForm = () => {
  const { addTodo, clearTodos, editTodo, editTask } = useContext(TodosContext)
  const [input, setInput] =  useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (editTodo) {
      editTask(input, editTodo.id)
    } else {
      addTodo(input)
      setInput('')
    }
  }

  useEffect(() => {
    if (editTodo) setInput(editTodo.title)
    else setInput('')
  }, [editTodo])

  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="add task ..."
          onChange={handleChange}
          value={input}
          required
      />
      <button type="submit"> {editTodo ? 'Edit' : 'Add Todo'} </button>
      <button onClick={clearTodos}> clear </button>

    </form>
  )
}

export default TodoForm
