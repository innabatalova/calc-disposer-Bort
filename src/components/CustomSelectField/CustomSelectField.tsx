import { useState, useEffect } from 'react'
import { Box, FormControl, Select, MenuItem, InputLabel } from '@mui/material'

import { ICustomSelectField } from './ICustomSelectField'
import { IStateSelectField } from './ICustomSelectField'

import { ultimate1500, ultimate2000 } from '../../db'

import { BoxDisposerStyle } from './mui-styles/BoxDisposer.style'

export const CustomSelectField = ({ idProps, labelProps, valueDisposerProps, changeValueDisposerProps }: ICustomSelectField) => {
  const [menuItemValue, setMenuItemValue] = useState<IStateSelectField[]>([valueDisposerProps])

  useEffect(() => {
    if (valueDisposerProps === 'Bort Ultimate 1500' || valueDisposerProps === 'Bort Ultimate 2000') {
      setMenuItemValue([ultimate1500.model, ultimate2000.model])
    } else if (valueDisposerProps === 1125 || valueDisposerProps === 1470) {
      setMenuItemValue([ultimate1500.power, ultimate2000.power])
    } else if (valueDisposerProps === 144790 || valueDisposerProps === 196990) {
      setMenuItemValue([ultimate1500.price, ultimate2000.price])
    } else {
      console.error('Error menuItem value props')
    }
  }, [])


  return (
    <Box sx={BoxDisposerStyle}>
      <FormControl fullWidth>
        <InputLabel id={idProps}>{labelProps}</InputLabel>
        <Select labelId={idProps} label={labelProps} value={valueDisposerProps} onChange={changeValueDisposerProps}>
          <MenuItem value={menuItemValue[0]}>{menuItemValue[0]}</MenuItem>
          <MenuItem value={menuItemValue[1]}>{menuItemValue[1]}</MenuItem>
        </Select>
      </FormControl >
    </Box >
  )
}

export default CustomSelectField