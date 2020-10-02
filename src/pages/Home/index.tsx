import React from 'react'

import GlobalStyle from './../../styles/global'

import LifePointsDisplay from './../../components/LifePointsDisplay/index'

export default function Home() {
  return (
    <>
      <GlobalStyle />

      <LifePointsDisplay playerLifePoints={8000} />
    </>
  )
}
