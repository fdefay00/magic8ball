import React, {useState} from 'react'

import Title from './Title'
import Image from './Image'
import Answer from './Answer'
import Question from './Question'
import History from './History'
import Loader from './Loader'

const history = []

export default function GameScreen() {
  const [answer, setAnswer] = useState() //current displayed answer
  const [loading, setLoading] = useState(false)

  //handle new answer coming in
  function handleAnswer(answer) {
    setAnswer((prevAns) => {
      //update history array when current answer changes
      if (prevAns) history.push(prevAns)
      // limit history to 10
      if (history.length > 10) history.shift()
      setLoading(false)

      return answer
    })
  }
  return (
    <div>
      <Title />
      <Image />
      {loading ? <Loader /> : <Answer answer={answer?.answer} />}
      <Question handleAnswer={handleAnswer} setLoading={setLoading} />
      <History history={history} />
    </div>
  )
}
