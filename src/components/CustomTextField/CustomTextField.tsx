import { useContext, useState } from 'react'
import { Box, FormControl, TextField } from '@mui/material'

import { ICustomTextField } from './ICustomTextField'
import { IContext } from '../../context/IContext'

import { BoxStyle } from './mui-styles/Box.style'

import Context from '../../context/context'

export const CustomTextField = ({ idProps, labelProps, helperProps, valueProps, defaultValueProps, variantProps, disabledProps }: ICustomTextField) => {
  const context = useContext<IContext>(Context)

  const [valid, setValid] = useState<boolean>(true)

  const validation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /\D/g
    const trimmedValue = e.target.value.trim()
    regExp.test(trimmedValue) ? setValid(false) : setValid(true)

    if (valid) {
      context[idProps] = Number(e.target.value)
    }
  }

  return (
    <Context.Provider value={context}>
      <Box sx={BoxStyle}>
        <FormControl fullWidth onChange={validation} >
          <TextField
            required={valid ? true : false}
            error={!valid ? true : false}
            id={idProps}
            label={labelProps}
            value={valueProps}
            defaultValue={defaultValueProps}
            helperText={valid ? helperProps : 'Укажите данные в числовом формате'}
            variant={variantProps}
            disabled={disabledProps}
          />
        </FormControl>
      </Box>
    </Context.Provider>
  )
}