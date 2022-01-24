import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext()

const TodosContextProvider = props => {
  const initTodos = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(initTodos)
  const [editTodo, setEditTodo] = useState(null)

  console.log(todos);
  console.log(JSON.stringify(todos))
  console.log(JSON.parse(JSON.stringify(todos)));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = title => {
    setTodos([...todos, {title, id: uuidv4()}])
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearTodos = () => {
    setTodos([])
  }

  const findTodo = id => {
    const todo = todos.find(todo => todo.id === id)
    setEditTodo(todo)
  }

  const editTask = (title, id) => {
    setTodos(todos.map(todo => todo.id === id ? {title, id} : todo))
    setEditTodo(null)
  }
  
  return (
    <TodosContext.Provider value={{todos, addTodo, removeTodo, clearTodos, findTodo, editTask, editTodo}}>
      {props.children}
    </TodosContext.Provider>

  )
}

export default TodosContextProvider

