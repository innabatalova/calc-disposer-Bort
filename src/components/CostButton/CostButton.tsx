import { Button } from '@mui/material'

import { CostButtonStyle } from './mui-styles/CostButton.style'

export const CostButton = () => {
  return (
    <Button sx={CostButtonStyle} variant="contained" type="submit">Рассчитать выгоду</Button>
  )
}