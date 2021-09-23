import React, {useState} from 'react'

export default function Question() {
  const [question, setQuestion] = useState('')

  function handleChange(e) {
    setQuestion(e.target.value)
  }

  return (
    <form>
      <input type="text" className="question" value={question} onChange={handleChange} />
    </form>
  )
}
