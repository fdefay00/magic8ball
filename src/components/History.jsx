import React, {useState} from 'react'
import Button from './Button'

export default function History() {
  const [showHistory, setShowHistory] = useState(false)

  // dynamic button label based
  let label = showHistory ? 'Hide History' : 'Show History'

  function handleClick() {
    setShowHistory((prev) => !prev)
  }
  return (
    <div>
      <Button label={label} onClick={handleClick} />
      {showHistory && <p>Show History</p>}
    </div>
  )
}
