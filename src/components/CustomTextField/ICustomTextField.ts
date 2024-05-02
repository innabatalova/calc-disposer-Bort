import { TextFieldVariants } from "@mui/material"

export type ICustomTextField = {
  idProps: string,
  labelProps: string,
  helperProps: string,
  defaultValueProps?: string | number | null,
  variantProps?: TextFieldVariants | undefined,
  disabledProps?: boolean | undefined,
  valueProps?: string | number | null | undefined
}