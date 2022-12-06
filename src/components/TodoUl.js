import React from 'react'
import TodoLi from './TodoLi'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}

function TodoUl({ notes, changer, deleted }) {
  return (
    <ul style={styles.ul}>
      {notes.map((element, index) => {
        return (
          <TodoLi
            index={index}
            element={element}
            key={element.id}
            changer={changer}
            deleted={deleted}
          />
        )
      })}
    </ul>
  )
}

export default TodoUl
