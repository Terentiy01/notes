import React, { useEffect, useState } from 'react'

const styles = {
  form: {
    textAlign: 'center',
    marginBottom: '16px',
  },
}

function TodoAdd({ dobavit }) {
  const [slova, setSlova] = useState('')

  function obnova(event) {
    event.preventDefault()

    if (slova) {
      dobavit(slova)
      setSlova('')
    }
  }

  //   useEffect(() => {
  //     console.log(slova)
  //   }, [slova])

  return (
    <form style={styles.form}>
      <input
        onChange={(event) => setSlova(event.target.value)}
        value={slova}
        type="text"
      />
      <button onClick={obnova}>Add</button>
    </form>
  )
}

export default TodoAdd
