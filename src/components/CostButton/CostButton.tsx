import { Button } from '@mui/material'

import { CostButtonStyle } from './mui-styles/CostButton.style'

const CostButton = () => {
  const clickCost = () => {
    console.log('test1111')
  }

  return (
    <Button sx={CostButtonStyle} variant="contained" type="submit">Рассчитать выгоду</Button>
  )
}

export default CostButton