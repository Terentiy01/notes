import React from 'react'

const styles = {
  li: {},
}

function TodoLi({ element, index }) {
  return (
    <div>
      <li style={styles.li}>
        {index + 1}
        &nbsp;
        {element.title}
      </li>
    </div>
  )
}

export default TodoLi
