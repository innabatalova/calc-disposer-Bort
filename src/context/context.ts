import { createContext } from 'react'

import { iContext } from './iContext'

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
  'amountDays': null
}

const Context = createContext<iContext>(valuesField)

export default Context