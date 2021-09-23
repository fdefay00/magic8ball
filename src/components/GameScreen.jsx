import React, {useState} from 'react'

import Title from './Title'
import Image from './Image'
import Answer from './Answer'
import Question from './Question'
import History from './History'

const history = []
export default function GameScreen() {
  const [answer, setAnswer] = useState() //current displayed answer

  //handle new answer coming in
  function handleAnswer(answer) {
    setAnswer((prevAns) => {
      //update history array when current answer changes
      if (prevAns) history.push(prevAns)
      // limit history to 10
      if (history.length > 10) history.shift()
      console.log({history})

      return answer
    })
  }
  return (
    <div>
      <Title />
      <Image />
      <Answer answer={answer?.answer} />
      <Question handleAnswer={handleAnswer} />
      <History history={history} />
    </div>
  )
}
