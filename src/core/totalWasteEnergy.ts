import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const totalWasteEnergy = (power: IDataType, energy: IDataType, time: IDataType, days: IDataType): IReturnType => {
  const costkW = 1000

  if (power === null || energy === null || time === null || days === null ||
    power === undefined || energy === undefined || time === undefined || days === undefined
  ) {
    return
  } else {
    return (power / costkW) * energy * time * days
  }
}
// подсчет доп расходов ресторана на электроэнергию при установке измельчителя
// (мощность измельчителя / 1000) - считаем кВт
//  затем умножить на тариф э/э * время работы в сутки * дни в месяце