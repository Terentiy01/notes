import React, { useEffect, useState } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoUl from './components/TodoUl'
import Context from './context'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((element) => {
        setTimeout(() => {
          setNotes(element)
        }, 1000)
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
        {notes.length ? (
          <TodoUl notes={notes} changer={changer} />
        ) : (
          <h4>Empty notes</h4>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
