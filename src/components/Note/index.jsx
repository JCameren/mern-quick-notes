import React from 'react'

const Note = ({ note }) => {
  return (
    <div style={{ border: '1px solid black', borderRadius: '10px'}}>
      <h3>{ note.text }</h3>
    </div>
  )
}

export default Note