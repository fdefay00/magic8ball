import React, {useState, useRef} from 'react'

import Title from './Title'
import Image from './Image'
import Answer from './Answer'
import Question from './Question'
import History from './History'
import Loader from './Loader'

const history = []

export default function GameScreen() {
  const [answer, setAnswer] = useState() //current displayed answer
  const loading = useRef(false)

  //handle new answer coming in
  function handleAnswer(answer) {
    setAnswer((prevAns) => {
      //update history array when current answer changes
      if (prevAns) history.push(prevAns)
      // limit history to 10
      if (history.length > 10) history.shift()
      loading.current = false

      return answer
    })
  }
  return (
    <div>
      <Title />
      <Image />
      {loading.current ? <Loader /> : <Answer answer={answer?.answer} />}
      <Question handleAnswer={handleAnswer} loading={loading} />
      <History history={history} />
    </div>
  )
}
