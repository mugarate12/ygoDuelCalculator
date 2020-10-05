import React from 'react'

import * as Styled from './styles'

interface NumberButtonInterface {
  number: number;
  onClick?: () => void;
} 

const NumberButton: React.FC<NumberButtonInterface> = ({ number, onClick }) => {
  return (
    <Styled.Button onClick={() => !!onClick ? onClick() : {}} >
      <Styled.NumberText>{number}</Styled.NumberText>
    </Styled.Button>
  )
}

export default NumberButton