import React from 'react'
import Title from './components/Title'
import Image from './components/Image'
import Answer from './components/Answer'
import Question from './components/Question'
import History from './components/History'

export default function GameScreen() {
  return (
    <div>
      <Title />
      <Image />
      <Answer />
      <Question />
      <History />
    </div>
  )
}
