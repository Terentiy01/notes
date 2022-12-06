import React, { useEffect, useState } from 'react'
import TodoUl from './components/TodoUl'

function App() {
  // const notes = [
  //   { id: 1, completed: false, title: 'Buy dildo for Diana' },
  //   { id: 2, completed: false, title: 'Buy dildo for DASDDSA' },
  //   { id: 3, completed: false, title: 'Buy dildo' },
  // ]

  const [notes, setNotes] = useState([
    { id: 1, completed: false, title: 'Buy dildo for Diana' },
    { id: 2, completed: false, title: 'Buy dildo for DASDDSA' },
    { id: 3, completed: false, title: 'Buy dildo' },
  ])

  function changer(cifra) {
    console.log(cifra)
    setNotes(
      notes.map((element) => {
        if (element.id === cifra) {
          element.completed = !element.completed
        }
        return element
      })
    )
  }

  // useEffect(() => {
  //   console.log(notes)
  // }, [notes])

  return (
    <div className="wrapper">
      <h1>Notes</h1>
      <TodoUl notes={notes} changer={changer} />
    </div>
  )
}

export default App
