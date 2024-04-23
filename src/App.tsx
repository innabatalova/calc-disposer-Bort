import { useState } from 'react'
import { Box, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import CustomTextField from './components/CustomTextField'
import CustomSelectField from './components/CustomSelectField/CustomSelectField'

import { ultimate1500, ultimate2000 } from './db'

import './App.css'

const App = () => {

  const [valueDisposer, setValueDisposer] = useState(ultimate1500)

  const changeValueDisposer = (e: any) => {
    e.preventDefault()

    if (typeof e.target.value === 'string') {
      if (e.target.value === 'Bort Ultimate 1500') { setValueDisposer(ultimate1500) }
      if (e.target.value === 'Bort Ultimate 2000') { setValueDisposer(ultimate2000) }
    }
    if (typeof e.target.value === 'number') {
      if (e.target.value === 1125) { setValueDisposer(ultimate1500) }
      if (e.target.value === 1470) { setValueDisposer(ultimate2000) }
      if (e.target.value === 144790) { setValueDisposer(ultimate1500) }
      if (e.target.value === 196990) { setValueDisposer(ultimate2000) }
    }
  }

  return (
    <div className="App">
      <CustomTextField idProps='energyTariff' labelProps='Тариф электроэнергии' helperProps='Стоимость 1кВт/час, руб' defaultValueProps='10' />
      <CustomTextField idProps='waterTariff' labelProps='Тариф холодной воды' helperProps='Стоимость 1м3, руб' defaultValueProps='60' />
      <CustomTextField idProps='sumCost' labelProps='Общие затраты на вывоз мусора' helperProps='Сумма текущих затрат на вывоз мусора, руб' />
      <CustomTextField idProps='partBioGarbage' labelProps='Доля биомусора' helperProps='Относительно общего кол-ва мусора, %' defaultValueProps='50' />
      <CustomTextField idProps='wasteWater' labelProps='Расход воды' helperProps='Дополнительный расход при работе измельчителя, л' />
      <CustomTextField idProps='timeWork' labelProps='Время работы измельчителя' helperProps='В сутки, час' defaultValueProps='5' />
      <CustomTextField idProps='sumDays' labelProps='Календарные дни' helperProps='Период работы в днях' defaultValueProps='30' />
      <CustomTextField idProps='dayCost' labelProps='Затраты на вывоз мусора в день' helperProps='Затраты за один день работы, руб' defaultValueProps='30' />
      <CustomTextField idProps='sumDays' labelProps='Календарные дни' helperProps='Период работы, дни' defaultValueProps='30' />
      <CustomTextField idProps='userOnDay' labelProps='Количество клиентов в день' helperProps='Среднее значение по Москве, чел' defaultValueProps='150' />


      <Box sx={{
        width: 330, marginTop: 4, marginBottom: 4, '@media (max-width: 420px)': {
          width: '100%',
        }
      }}>
        <FormControl fullWidth>
          <InputLabel id='model'>Модель измельчителя Bort</InputLabel>
          <Select labelId='model' label='Модель измельчителя Bort' value={valueDisposer.model} onChange={changeValueDisposer}>
            <MenuItem value={ultimate1500.model}>{ultimate1500.model}</MenuItem>
            <MenuItem value={ultimate2000.model}>{ultimate2000.model}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{
        width: 330, marginTop: 4, marginBottom: 4, '@media (max-width: 420px)': {
          width: '100%',
        }
      }}>
        <FormControl fullWidth>
          <InputLabel id='power'>Мощность измельчителя, Вт</InputLabel>
          <Select labelId='power' label='Мощность измельчителя, Вт' value={valueDisposer.power} onChange={changeValueDisposer}>
            <MenuItem value={ultimate1500.power}>{ultimate1500.power}</MenuItem>
            <MenuItem value={ultimate2000.power}>{ultimate2000.power}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{
        width: 330, marginTop: 4, marginBottom: 4, '@media (max-width: 420px)': {
          width: '100%',
        }
      }}>
        <FormControl fullWidth>
          <InputLabel id='price'>Цена измельчителя, руб</InputLabel>
          <Select labelId='price' label='Цена измельчителя, руб' value={valueDisposer.price} onChange={changeValueDisposer}>
            <MenuItem value={ultimate1500.price}>{ultimate1500.price}</MenuItem>
            <MenuItem value={ultimate2000.price}>{ultimate2000.price}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div >
  )
}

export default App
