import React, {useState} from 'react'
import axios from 'axios'

import Button from './Button'

export default function Question({handleAnswer, loading}) {
  const [question, setQuestion] = useState('')
  const [validationError, setValidationError] = useState('')

  function handleChange(e) {
    setQuestion(e.target.value)
  }

  // validate input before submitting
  function validate(e) {
    e.preventDefault()
    // check if there's at least one character in addition to question mark
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
    loading.current = true
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
        const ballAnswer = {
          question: question,
          answer:
            'There was a problem that prevented us from getting your answer. Please try again later',
        }
        handleAnswer(ballAnswer)
      })
  }

  return (
    <div className="input-area">
      <form onSubmit={validate}>
        <input
          type="text"
          placeholder="Ask your question..."
          className="question"
          value={question}
          onChange={handleChange}
        />
        {validationError && <p className="error">{validationError}</p>}
        <br />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  )
}
