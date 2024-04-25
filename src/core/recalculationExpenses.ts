import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const recalculationExpenses = (expenses: IDataType, bio: IDataType): IReturnType => {
  if (expenses === null || bio === null || expenses === undefined || bio === undefined) {
    return
  } else {
    return expenses / 100 * bio
  }
}

export default recalculationExpenses