import React from 'react'

import GlobalStyle from './../../styles/global'

import * as Styled from './styles'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'
import NumberButton from './../../components/NumberButton/index'
import IconButton from './../../components/IconButton/index'

export default function Home() {
  return (
    <>
      <GlobalStyle />

      <LifePointsDisplay playerLifePoints={8000} />
      <NumberButton number={1}/>

      <IconButton Icon={Styled.PlusIcon}/>
    </>
  )
}
