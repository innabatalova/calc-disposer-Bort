export type ICustomSelectField = {
  idProps: string,
  labelProps: string,
  valueDisposerProps: number | string,
  changeValueDisposerProps: (e: any) => void
}

export type IStateSelectField = string | number