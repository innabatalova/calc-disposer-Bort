import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const paybackTime = (price: IDataType, saving: IDataType): IReturnType => {
  if (price === null || price === undefined || saving === null || saving === undefined) {
    return
  } else {
    return Math.round(price / (saving / 30))
  }
}