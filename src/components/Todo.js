import React, { useState } from 'react'

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
  const [notes, setNotes] = useState([
    {
      id: 1,
      completed: false,
      title: 'Привет мир!',
    },
    {
      id: 2,
      completed: false,
      title: 'Привет мир!!!!!!!!!!',
    },
    {
      id: 3,
      completed: false,
      title: 'Привет мир!!!!!!!!!!!!!!!!!!!',
    },
  ])

  return (
    <div className="wrapper">
      <h1>Заметки</h1>
      <ul style={styles.ul}>
        {notes.map((element, index) => {
          return (
            <li style={styles.li} key={element.id}>
              <span>
                <strong>{index + 1}</strong>
                &nbsp;
                {element.title}
              </span>
              <button>&times;</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo
