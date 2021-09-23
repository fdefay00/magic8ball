import React, {useState} from 'react'
import axios from 'axios'

import Button from './Button'

export default function Question({handleAnswer}) {
  const [question, setQuestion] = useState('')
  const [validationError, setValidationError] = useState('')

  function handleChange(e) {
    setQuestion(e.target.value)
  }

  // validate input before submitting
  function validate(e) {
    e.preventDefault()
    // check if there's at least one letter plus question mark
    // const test = /[a-z][A-Z]\?/
    if (question.length < 2) {
      return setValidationError('Ask a valid question')
    }
    if (question[question.length - 1] !== '?') {
      return setValidationError('Question must end with question mark')
    }
    setValidationError('')
    setQuestion('')
    fetchAnswer(question)
  }

  // send request to Api upon successful question validation
  function fetchAnswer(question) {
    const url = `https://8ball.delegator.com/magic/JSON/${question}`
    axios
      .get(url)
      .then((res) => {
        const ballAnswer = {
          question: question,
          answer: res.data.magic.answer,
        }
        handleAnswer(ballAnswer)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={validate}>
      {validationError && <p>{validationError}</p>}
      <input type="text" className="question" value={question} onChange={handleChange} />
      <br />
      <Button label="Submit" type="submit" />
    </form>
  )
}
