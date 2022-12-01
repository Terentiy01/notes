import React, { useEffect, useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal.js'

// const AddTodo = React.lazy(() => import('./Todo/AddTodo'))
const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./Todo/AddTodo'))
      }, 2000)
    })
)

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((api) => {
        setTimeout(() => {
          setTodos(api)
          setLoading(false)
        }, 1000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function dobavit(text) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title: text,
        },
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <Modal />
        <React.Suspense fallback={<Loader />}>
          <AddTodo dobavit={dobavit} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
