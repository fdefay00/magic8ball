import React, {useState} from 'react'

import Title from './Title'
import Image from './Image'
import Answer from './Answer'
import Question from './Question'
import History from './History'

export default function GameScreen() {
  const [answer, setAnswer] = useState('')
  const [history, setHistory] = useState([])

  //handle new answer coming in
  function handleAnswer(answer) {
    setAnswer((prevAns) => {
      //update history array when current answer changes
      setHistory((prevHis) => {
        const updatedHistory = [...prevHis, prevAns]
        if (updatedHistory.length > 0) updatedHistory.shift()
        return updatedHistory
      })
      return Answer
    })
  }
  return (
    <div>
      <Title />
      <Image />
      <Answer answer={answer} />
      <Question handleAnswer={handleAnswer} />
      <History history={history} />
    </div>
  )
}
