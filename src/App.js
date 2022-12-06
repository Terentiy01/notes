import React, { useEffect, useState } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoUl from './components/TodoUl'
import Context from './context'
import Loader from './components/Loader'

function App() {
  const [notes, setNotes] = useState([])
  const [zagruska, setZagruska] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((element) => {
        setTimeout(() => {
          setNotes(element)
          setZagruska(false)
        }, 1500)
      })
  }, [])

  function dobavit(addTodo) {
    setNotes(
      notes.concat([
        {
          id: Date.now(),
          completed: false,
          title: addTodo,
        },
      ])
    )
  }

  function changer(cifra) {
    setNotes(
      notes.map((element) => {
        if (element.id === cifra) {
          element.completed = !element.completed
        }
        return element
      })
    )
  }

  function deleted(nomer) {
    setNotes(notes.filter((el) => el.id !== nomer))
  }

  return (
    <Context.Provider value={{ deleted }}>
      <div className="wrapper">
        <h1 className="tablo">Notes</h1>
        <TodoAdd dobavit={dobavit} />
        {zagruska && <Loader />}
        {notes.length ? (
          <TodoUl notes={notes} changer={changer} />
        ) : zagruska ? null : (
          <h4>Empty notes</h4>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
