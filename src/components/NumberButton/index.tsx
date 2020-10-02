import React from 'react'

import * as Styled from './styles'

interface NumberButtonInterface {
  number: number;
}

const NumberButton: React.FC<NumberButtonInterface> = ({ number }) => {
  return (
    <Styled.Button>
      <Styled.NumberText>{number}</Styled.NumberText>
    </Styled.Button>
  )
}

export default NumberButton