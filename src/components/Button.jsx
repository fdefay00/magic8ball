import React from 'react'

export default function Button({label, onClick, type}) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  )
}
