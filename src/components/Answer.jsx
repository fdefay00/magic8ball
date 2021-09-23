import React from 'react'

export default function Answer({answer}) {
  return <p className="answer">{answer || 'Answer Area'}</p>
}
