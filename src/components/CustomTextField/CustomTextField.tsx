import { Box, FormControl, TextField } from '@mui/material'

import { ICustomTextField } from './ICustomTextField'

import { BoxStyle } from '../../mui-styles/Box.style'

export const CustomTextField = ({ idProps, labelProps, helperProps, defaultValueProps }: ICustomTextField) => {
  return (
    <Box sx={BoxStyle}>
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