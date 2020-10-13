import React, { useState, useEffect } from 'react'

import * as Styled from './styles'

interface TimerInterface {
  isMobile?: boolean;
}

const Timer: React.FC<TimerInterface> = ({ isMobile }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(40)
  const [time, setTime] = useState<string>(TimeString())

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTime()
      setTime(TimeString())
    }, 1000)

    return () => clearTimeout(timer)
  })

  function calculateTime() {
    const timeOut = seconds === 0 && minutes === 0
    const nextMinute = seconds === 0 && minutes !== 0

    if (timeOut) {
      return 'TIME'
    } else if (nextMinute) {
      setMinutes(m => m - 1)
      setSeconds(60)

    } else {
      setSeconds(s => s - 1)

    }
  }

  function TimeString() {
    return `${minutes}:${seconds}`
  }

  function renderTimer() {
    if (isMobile) {
      return(
        <Styled.TimerMobileContainer>
          <Styled.TimerContainer>
            <Styled.TimerContent>{time}</Styled.TimerContent>
          </Styled.TimerContainer>

          <Styled.TimerPlayerTwoContainer>
            <Styled.TimerContent>{time}</Styled.TimerContent>
          </Styled.TimerPlayerTwoContainer>
      </Styled.TimerMobileContainer>
      )
    } else {
      return (
        <Styled.TimerContainer>
          <Styled.TimerContent>{time}</Styled.TimerContent>
        </Styled.TimerContainer>
      )
    }
  }

  return renderTimer()
}

export default Timer
