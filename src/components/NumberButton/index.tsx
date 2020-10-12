import React, { useState }  from 'react'

import * as Styled from './styles'

interface NumberButtonInterface {
  number: number;
  onClick?: () => void;
  player?: 1 | 2;
} 

const NumberButton: React.FC<NumberButtonInterface> = ({ number, onClick, player }) => {
  const [color] = useState(SetColor())
  
  function SetColor() {
    if (player === 1) {
      return {
        buttonColor: '#333',
        numberTextColor: '#FFF'
      }
    } else {
      return {
        buttonColor: 'EBE2E2',
        numberTextColor: '#333'
      }
    }
  }
  
  return (
    <Styled.Button onClick={() => !!onClick ? onClick() : {}} color={color.buttonColor} >
      <Styled.NumberText color={color.numberTextColor} >{number}</Styled.NumberText>
    </Styled.Button>
  )
}

export default NumberButton