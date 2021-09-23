import React, {useState} from 'react'
import Button from './Button'

export default function History({history}) {
  const [showHistory, setShowHistory] = useState(false)

  // dynamic button label based
  let label = showHistory ? 'Hide History' : 'Show History'

  const questions = (
    <ul>
      {history.map((history, i) => (
        <li key={i}>
          Q{i + 1}- {history.question} {history.answer}
        </li>
      ))}
    </ul>
  )

  function handleClick() {
    setShowHistory((prev) => !prev)
  }
  return (
    <div>
      <Button label={label} handleClick={handleClick} />
      {showHistory && questions}
    </div>
  )
}
