import styled from 'styled-components'
import {
  FaPlus,
  FaMinus,
  FaBackspace,
  FaSync,
  FaDice,
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
  FaTasks,
  FaChevronLeft
} from 'react-icons/fa'

const iconsSize = '14px'

// icons with buttons
export const PlusIcon = styled(FaPlus)`
  font-size: ${iconsSize};
`

export const BackspaceIcon = styled(FaBackspace)`
  font-size: ${iconsSize};
`

export const MinusIcon = styled(FaMinus)`
  font-size: ${iconsSize};
`

export const Reload = styled(FaSync)`
  font-size: ${iconsSize};
`

export const GenericDice = styled(FaDice)`
  font-size: ${iconsSize};
`

export const DiceOne = styled(FaDiceOne)`
  font-size: ${iconsSize};
`

export const DiceTwo = styled(FaDiceTwo)`
  font-size: ${iconsSize};
`

export const DiceThree = styled(FaDiceThree)`
  font-size: ${iconsSize};
`

export const DiceFour = styled(FaDiceFour)`
  font-size: ${iconsSize};
`

export const DiceFive = styled(FaDiceFive)`
  font-size: ${iconsSize};
`

export const DiceSix = styled(FaDiceSix)`
  font-size: ${iconsSize};
`

export const HistoryIcon = styled(FaTasks)`
  font-size: ${iconsSize};
`

export const BackIcon = styled(FaChevronLeft)`
  font-size: ${iconsSize};
`
