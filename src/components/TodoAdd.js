import React, { useState } from 'react'

const styles = {
  input: {
    marginBottom: '1rem',
  },
}

function TodoAdd() {
  const [text, setText] = useState('')

  return (
    <>
      <input
        onChange={(event) => setText(event.target.value)}
        style={styles.input}
        value={text}
      />
      <button>Добавить</button>
    </>
  )
}

export default TodoAdd
