import React, { useEffect, useState } from 'react'
import TodoUl from './components/TodoUl'

function App() {
  const [notes, setNotes] = useState([
    { id: 1, completed: false, title: 'Buy dildo for Diana' },
    { id: 2, completed: false, title: 'Buy dildo for DASDDSA' },
    { id: 3, completed: false, title: 'Buy dildo' },
  ])

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
    <div className="wrapper">
      <h1 className="tablo">Notes</h1>
      <TodoUl notes={notes} changer={changer} deleted={deleted} />
    </div>
  )
}

export default App
