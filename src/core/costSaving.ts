import { IDataType } from "../types/IDataType"
import { IReturnType } from "../types/IReturnType"

export const costSaving = (recalc: IDataType, wasteEnergy: IDataType, wasteWater: IDataType): IReturnType => {
  if (recalc === null || recalc === undefined || 
    wasteEnergy === null || wasteWater === null || wasteEnergy === undefined || wasteWater === undefined) {
    return
  } else {
    return recalc - (wasteEnergy + wasteWater)
  }
}