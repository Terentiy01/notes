import React from 'react'

const styles = {
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

function TodoLi({ element, index, changer, deleted }) {
  const chert = []

  if (element.completed) {
    chert.push('chertochka')
  }

  return (
    <li style={styles.li}>
      <span className={chert.join(' ')}>
        <input
          style={styles.input}
          type={'checkbox'}
          onChange={() => changer(element.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {element.title}
      </span>
      <button className="rm" onClick={() => deleted(element.id)}>
        &times;
      </button>
    </li>
  )
}

export default TodoLi
