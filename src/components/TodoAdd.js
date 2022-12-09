import React, { useState } from 'react'

const styles = {
  input: {
    marginBottom: '1rem',
  },
}

function TodoAdd({ addHandler }) {
  const [text, setText] = useState('')

  function obnovlenie(event) {
    event.preventDefault()

    if (text.length) {
      addHandler(text)
      setText('')
    }
  }

  return (
    <>
      <input
        onChange={(event) => setText(event.target.value)}
        style={styles.input}
        value={text}
      />
      <button onClick={obnovlenie}>Добавить</button>
    </>
  )
}

export default TodoAdd
