import { createContext } from 'react'

import { IContext } from './IContext'

const valuesField = {
  'energyTariff': null,
  'waterTariff': null,
  'dayCost': null,
  'totalCost': null,
  'timeWork': null,
  'wasteEnergy': null,
  'wasteWater': null,
  'userOnDay': null,
  'partBioGarbage': null,
  'amountDays': null,
  'modelPower': null,
  'modelPrice': null
}

const Context = createContext<IContext>(valuesField)

export default Context