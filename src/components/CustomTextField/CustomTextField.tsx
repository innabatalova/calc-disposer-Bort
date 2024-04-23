import React from 'react'
import { Box, FormControl, TextField } from '@mui/material'

import { ICustomTextField } from './ICustomTextField'

export const CustomTextField = ({ idProps, labelProps, helperProps, defaultValueProps }: ICustomTextField) => {
  return (
    <Box sx={{
      width: 330, marginTop: 4, marginBottom: 4, '@media (max-width: 420px)': {
        width: '100%',
      }
    }}>
      <FormControl fullWidth>
        <TextField
          required
          id={idProps}
          label={labelProps}
          defaultValue={defaultValueProps}
          helperText={helperProps}
        />
      </FormControl>
    </Box>
  )
}

export default CustomTextField