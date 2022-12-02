import React from 'react'
import TodoUl from './components/TodoUl'

function App() {
  const notes = [
    { id: 1, completed: false, title: 'Buy dildo for Diana' },
    { id: 2, completed: false, title: 'Buy dildo for' },
    { id: 3, completed: false, title: 'Buy dildo' },
  ]
  return (
    <div>
      <h1>Notes</h1>
      <TodoUl notes={notes} />
    </div>
  )
}

export default App
