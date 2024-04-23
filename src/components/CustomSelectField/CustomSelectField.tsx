import { Box, FormControl, Select, MenuItem, InputLabel } from '@mui/material'

import { ICustomSelectField } from './ICustomSelectField'

const CustomSelectField = ({ idProps, labelProps, valueOneProps, valueTwoProps }: ICustomSelectField) => {
  return (
    <Box sx={{marginBottom: 4}}>
      <InputLabel sx={{ fontFamily: 'Roboto' }} id={idProps}>{labelProps}</InputLabel>
      <Select labelId={idProps} label={labelProps} defaultValue={valueOneProps}>
        <MenuItem value={valueOneProps}>{valueOneProps}</MenuItem>
        <MenuItem value={valueTwoProps}>{valueTwoProps}</MenuItem>
      </Select>
    </Box>
  )
}

export default CustomSelectField