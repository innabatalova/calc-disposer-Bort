import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const totalWasteRemovalCosts = (amountDays: IDataType, costDay: IDataType): IReturnType => {
  if (amountDays === null || costDay === null || amountDays === undefined || costDay === undefined) {
    return
  } else {
    return amountDays * costDay
  }
}
// подсчет общей суммы расходов ресторана на вывоз мусора
// кол-во дней * стоимость вывоза на день