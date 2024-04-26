import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const paybackTime = (price: IDataType, saving: IDataType, days: IDataType): IReturnType => {
  if (price === null || price === undefined || saving === null || saving === undefined
    || days === null || days === undefined
  ) {
    return
  } else {
    return Math.round(price / (saving / days))
  }
}