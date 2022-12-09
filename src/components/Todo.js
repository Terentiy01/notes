import React, { useState } from 'react'
import TodoAdd from './TodoAdd'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
}

function Todo() {
  const [notes, setNotes] = useState([])

  function addHandler(add) {
    setNotes(
      notes.concat([
        {
          id: Date.now(),
          completed: false,
          title: add,
        },
      ])
    )
  }

  function changeCompleted(id) {
    setNotes(
      notes.map((element) => {
        if (element.id === id) {
          element.completed = !element.completed
        }
        return element
      })
    )
  }

  function remover(id) {
    setNotes(notes.filter((element) => element.id !== id))
  }

  // function remover(id) {
  //   setNotes(
  //     notes.filter((element) => {
  //       if (element.id !== id) {
  //         return true
  //       }
  //     })
  //   )
  // }

  return (
    <div className="wrapper">
      <h1>Заметки</h1>
      <TodoAdd addHandler={addHandler} />
      <ul style={styles.ul}>
        {notes.length ? (
          notes.map((element, index) => {
            const line = []

            if (element.completed) {
              line.push('chertochka')
            }

            return (
              <li style={styles.li} key={element.id}>
                <span className={line.join(' ')}>
                  <input
                    checked={element.completed}
                    type={'checkbox'}
                    style={styles.input}
                    onChange={() => changeCompleted(element.id)}
                  />
                  <strong>{index + 1}</strong>
                  &nbsp;
                  {element.title}
                </span>
                <button className="rm" onClick={() => remover(element.id)}>
                  &times;
                </button>
              </li>
            )
          })
        ) : (
          <p>Нет заметок</p>
        )}
      </ul>
    </div>
  )
}

export default Todo
