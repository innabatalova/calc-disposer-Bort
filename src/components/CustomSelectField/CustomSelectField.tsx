import { useState, useContext } from 'react'
import { Card, Box, FormControl, Select, MenuItem, InputLabel, Typography } from '@mui/material'

import { IContext } from '../../context/IContext'

import { ultimate1500, ultimate2000 } from '../../db'

import { CardDisposerStyle } from './mui-styles/CardDisposer.style'
import { BoxDisposerStyle } from './mui-styles/BoxDisposer.style'

import Context from '../../context/context'

export const CustomSelectField = () => {
  const defoultContext = useContext(Context)
  const [context] = useState<IContext>(defoultContext)

  const [valueDisposer, setValueDisposer] = useState(ultimate1500)

  const changeValueDisposer = (e: any) => {
    e.preventDefault()

    if (typeof e.target.value === 'string') {
      if (e.target.value === 'Bort Ultimate 1500') { 
        setValueDisposer(ultimate1500)
        context['modelPower'] = ultimate1500.power
        context['modelPrice'] = ultimate1500.price
      }
      if (e.target.value === 'Bort Ultimate 2000') { 
        setValueDisposer(ultimate2000)
        context['modelPower'] = ultimate2000.power
        context['modelPrice'] = ultimate2000.price
      }
    }
    if (typeof e.target.value === 'number') {
      if (e.target.value === 1125 || e.target.value === 144790) { 
        setValueDisposer(ultimate1500)
        context['modelPower'] = ultimate1500.power
        context['modelPrice'] = ultimate1500.price
      }
      if (e.target.value === 1470 || e.target.value === 196990) { 
        setValueDisposer(ultimate2000)
        context['modelPower'] = ultimate2000.power
        context['modelPrice'] = ultimate2000.price
      }
    }
  }

  return (
    <Card sx={CardDisposerStyle}>
      <Typography variant="h5" align='center'>
        Подобрать измельчитель
      </Typography>
      <Box sx={BoxDisposerStyle}>
        <FormControl fullWidth>
          <InputLabel id='model'>Модель измельчителя Bort</InputLabel>
          <Select labelId='model' label='Модель измельчителя Bort' value={valueDisposer.model} onChange={changeValueDisposer}>
            <MenuItem value={ultimate1500.model}>{ultimate1500.model}</MenuItem>
            <MenuItem value={ultimate2000.model}>{ultimate2000.model}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={BoxDisposerStyle}>
        <FormControl fullWidth>
          <InputLabel id='power'>Мощность измельчителя, Вт</InputLabel>
          <Select labelId='power' label='Мощность измельчителя, Вт' value={valueDisposer.power} onChange={changeValueDisposer}>
            <MenuItem value={ultimate1500.power}>{ultimate1500.power}</MenuItem>
            <MenuItem value={ultimate2000.power}>{ultimate2000.power}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={BoxDisposerStyle}>
        <FormControl fullWidth>
          <InputLabel id='price'>Цена измельчителя, руб</InputLabel>
          <Select labelId='price' label='Цена измельчителя, руб' value={valueDisposer.price} onChange={changeValueDisposer}>
            <MenuItem value={ultimate1500.price}>{ultimate1500.price}</MenuItem>
            <MenuItem value={ultimate2000.price}>{ultimate2000.price}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Card>
  )
}