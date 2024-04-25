import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const totalWasteWater = (users: IDataType, days: IDataType, water: IDataType): IReturnType => {
  const costkB = 1000
  const costLiterOnUser = 3

  if (users === null || days === null || water === null ||
    users === undefined || days === undefined || water === undefined) {
    return
  } else {
    return (users * days * (costLiterOnUser / costkB)) * water
  }
}
// подсчет доп расходов ресторан на хол воду при установке измельчителя
// кол-во посетителей в сутки * дни в месяце * (пересчет с литров на кубометры расхода воды) * тариф за воду