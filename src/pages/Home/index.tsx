import React from 'react'

import GlobalStyle from './../../styles/global'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'
import NumberButton from './../../components/NumberButton/index'

export default function Home() {
  return (
    <>
      <GlobalStyle />

      <LifePointsDisplay playerLifePoints={8000} />
      <NumberButton number={1}/>
    </>
  )
}
