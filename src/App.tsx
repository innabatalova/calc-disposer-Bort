import { useState, useContext } from 'react'
import { Card, Typography } from '@mui/material'

import { CustomBlockSelect } from './blocks/CustomBlockSelect/CustomBlockSelect'
import { CustomTextField } from './components/CustomTextField'
import { CostButton } from './components/CostButton'
import { CustomBlockResult } from './blocks/CustomBlockResult'

import styles from './App.module.css'
import { CardStyle } from './mui-styles/Card.style'
import { TypographyTextStyle } from './mui-styles/TypographyText.style'

import Context from './context/context'

import { IContext } from './context/IContext'

import { totalWasteRemovalCosts } from './core'
import { totalWasteEnergy } from './core'
import { totalWasteWater } from './core'
import { recalculationExpenses } from './core'
import { costSaving } from './core'
import { paybackTime } from './core'

const App = () => {
  const defoultContext = useContext(Context)
  const [context, setContext] = useState<IContext>(defoultContext)
  console.log(context);


  const costTotal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const wasteRemovalCostsResult = totalWasteRemovalCosts(context.amountDays, context.dayCost)
    const recalResult = recalculationExpenses(wasteRemovalCostsResult, context.partBioGarbage)

    const wasteEnergyResult = totalWasteEnergy(context.modelPower, context.energyTariff, context.timeWork, context.amountDays)
    const wasteWaterResult = totalWasteWater(context.userOnDay, context.amountDays, context.waterTariff)
    const savingResult = costSaving(recalResult, wasteEnergyResult, wasteWaterResult)

    const paybackResult = paybackTime(context.modelPrice, savingResult, context.amountDays)

    const newContext = {
      'energyTariff': context.energyTariff,
      'waterTariff': context.waterTariff,
      'dayCost': context.dayCost,
      'timeWork': context.timeWork,
      'wasteEnergy': context.wasteEnergy,
      'wasteWater': context.wasteWater,
      'userOnDay': context.userOnDay,
      'partBioGarbage': context.partBioGarbage,
      'amountDays': context.amountDays,
      'modelPower': context.modelPower,
      'modelPrice': context.modelPrice,
      'totalCost': wasteRemovalCostsResult,
      'recalResult': recalResult,
      'savingResult': savingResult,
      'paybackResult': paybackResult
    }
    setContext(newContext)
  }


  return (
    <Context.Provider value={context}>
      <div className={styles.App}>
        <Typography variant="h4" align='center'>
          Калькулятор выгоды промышленных измельчителей Bort
        </Typography>
        <Typography variant="body1" sx={TypographyTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ipsa in cum aut laboriosam dicta at repellendus ea sequi officiis?
          Consectetur ex maiores reiciendis rerum voluptatem quaerat facere itaque, unde ab.
        </Typography>

        <form className={styles.Wrapper} onSubmit={costTotal}>

          <div className={styles.Data}>
            <Card sx={CardStyle}>
              <Typography variant="h6">
                Работа ресторана
              </Typography>
              <div className={styles.Items}>
                <CustomTextField idProps='userOnDay' labelProps='Количество клиентов в день' helperProps='Среднее значение по Москве, чел' defaultValueProps={context.userOnDay} />
                <CustomTextField idProps='partBioGarbage' labelProps='Доля биомусора' helperProps='Относительно общего кол-ва мусора, %' defaultValueProps={context.partBioGarbage} />
              </div>
            </Card>

            <Card sx={CardStyle}>
              <Typography variant="h6">
                Затраты на вывоз мусора
              </Typography>
              <div className={styles.Items}>
                <CustomTextField idProps='dayCost' labelProps='Затраты на вывоз мусора в день' helperProps='Затраты за один день работы, руб' defaultValueProps={context.dayCost} />
                <CustomTextField idProps='amountDays' labelProps='Календарные дни' helperProps='Период работы, дни' defaultValueProps={context.amountDays} />
              </div>
            </Card>

            <Card sx={CardStyle}>
              <Typography variant="h6">
                Тарифы
              </Typography>
              <CustomTextField idProps='energyTariff' labelProps='Тариф электроэнергии' helperProps='Стоимость 1кВт/час, руб' defaultValueProps={context.energyTariff} />
              <CustomTextField idProps='waterTariff' labelProps='Тариф холодной воды' helperProps='Стоимость 1м3, руб' defaultValueProps={context.waterTariff} />
            </Card>

            <Card sx={CardStyle}>
              <Typography variant="h6">
                Расход измельчителя
              </Typography>
              <div className={styles.Items}>
                <CustomTextField idProps='timeWork' labelProps='Время работы измельчителя' helperProps='В сутки, час' defaultValueProps={context.timeWork} />
                <CustomTextField idProps='wasteEnergy' labelProps='Расход электроэнергии' helperProps='Дополнительный расход на оплату электроэнергии при работе измельчителя, руб' defaultValueProps={context.wasteEnergy} />
                <CustomTextField idProps='wasteWater' labelProps='Расход воды' helperProps='Дополнительный расход на оплату воды при работе измельчителя, руб' defaultValueProps={context.wasteWater} />
              </div>
            </Card>
          </div>

          <div className={styles.CostWrapper}>

            <div className={styles.Coster}>
              <CustomBlockSelect />
              <CostButton />
            </div>
            <CustomBlockResult />

          </div>

        </form>

      </div >
    </Context.Provider>
  )
}

export default App
