import React, { useEffect, useState } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoUl from './components/TodoUl'
import Context from './context'

function App() {
  const [notes, setNotes] = useState([])

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
        <TodoUl notes={notes} changer={changer} />
      </div>
    </Context.Provider>
  )
}

export default App
