import { useState, useContext } from 'react'
import { Card, Typography } from '@mui/material'

import { CustomSelectField } from '../../components/CustomSelectField/CustomSelectField'

import { ultimate1500, ultimate2000 } from '../../db'

import { CardDisposerStyle } from './mui-styles/CardDisposer.style'

import Context from '../../context/context'

export const CustomBlockSelect = () => {
  const context = useContext(Context)

  const [valueDisposer, setValueDisposer] = useState(ultimate1500)

  const changeValueDisposer = (e: any) => {
    e.preventDefault()

    if (typeof e.target.value === 'string') {
      if (e.target.value === 'Bort Ultimate 1500') {
        setValueDisposer(ultimate1500)
        context.modelPower = ultimate1500.power
        context.modelPrice = ultimate1500.price
      }
      if (e.target.value === 'Bort Ultimate 2000') {
        setValueDisposer(ultimate2000)
        context.modelPower = ultimate2000.power
        context.modelPrice = ultimate2000.price
      }
    }
    if (typeof e.target.value === 'number') {
      if (e.target.value === 1125 || e.target.value === 176990) {
        setValueDisposer(ultimate1500)
        context.modelPower = ultimate1500.power
        context.modelPrice = ultimate1500.price
      }
      if (e.target.value === 1470 || e.target.value === 243190) {
        setValueDisposer(ultimate2000)
        context.modelPower = ultimate2000.power
        context.modelPrice = ultimate2000.price
      }
    }
  }

  return (
    <Card sx={CardDisposerStyle}>
      <Typography variant="h6" align='center'>
        Выбрать измельчитель
      </Typography>
      <CustomSelectField idProps='model' labelProps='Модель измельчителя' valueDisposerProps={valueDisposer.model} changeValueDisposerProps={changeValueDisposer} />
      <CustomSelectField idProps='power' labelProps='Мощность измельчителя' valueDisposerProps={valueDisposer.power} changeValueDisposerProps={changeValueDisposer} />
      <CustomSelectField idProps='price' labelProps='Цена измельчителя' valueDisposerProps={valueDisposer.price} changeValueDisposerProps={changeValueDisposer} />
    </Card>
  )
}

export default CustomBlockSelect