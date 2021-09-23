import React from 'react'

export default function Button({label, handleClick, type}) {
  return (
    <button type={type} onClick={handleClick}>
      {label}
    </button>
  )
}
