import { IContext } from "./IContext"

import {
  defaultEnergyTariff,
  defaultWaterTariff,
  defaultAmountDays,
  defaultDayCost,
  defaultTimeWork,
  defaultUserOnDay,
  defaultPartBioGarbage
} from "../defaultValues"

import { ultimate1500 } from '../db'

import {
  totalWasteEnergy,
  totalWasteWater
} from '../core'

const sumWasteEnergy = totalWasteEnergy(ultimate1500.power, defaultEnergyTariff, defaultTimeWork, defaultAmountDays)
const sumWasteWater = totalWasteWater(defaultUserOnDay, defaultAmountDays, defaultWaterTariff)

export const defaultContext: IContext = {
  'energyTariff': defaultEnergyTariff,
  'waterTariff': defaultWaterTariff,
  'dayCost': defaultDayCost,
  'timeWork': defaultTimeWork,
  'wasteEnergy': sumWasteEnergy,
  'wasteWater': sumWasteWater,
  'userOnDay': defaultUserOnDay,
  'partBioGarbage': defaultPartBioGarbage,
  'amountDays': defaultAmountDays,
  'modelPower': ultimate1500.power,
  'modelPrice': ultimate1500.price,
  'totalCost': 0,
  'recalResult': 0,
  'savingResult': 0,
  'paybackResult': 0
}