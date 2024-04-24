import { useState, useContext, useEffect } from 'react'
import { Card, Typography } from '@mui/material'

import CustomTextField from './components/CustomTextField'
import CustomSelectField from './components/CustomSelectField/CustomSelectField'
import CostButton from './components/CostButton'

import styles from './App.module.css'
import { CardStyle } from './mui-styles/Card.style'
import { TypographyTextStyle } from './mui-styles/TypographyText.style'

import { defaultEnergyTariff } from './defaultValues/defaultEnergyTariff'
import { defaultWaterTariff } from './defaultValues/defaultWaterTariff'
import { defaultAmountDays } from './defaultValues/defaultAmountDays'
import { defaultDayCost } from './defaultValues/defaultDayCost'
import { defaultTimeWork } from './defaultValues/defaultTimeWork'
import { defaultUserOnDay } from './defaultValues/defaultUserOnDay'
import { defaultPartBioGarbage } from './defaultValues/defaultPartBioGarbage'

import { useTotalWasteRemovalCosts } from './hooks/useTotalWasteRemovalCosts'
import { useSumWasteEnergy } from './hooks/useSumWasteEnergy'
import { useSumWasteWater } from './hooks/useSumWasteWater'

import { ultimate1500 } from './db'

import Context from './context/context'

import { iContext } from './context/iContext'

const App = () => {
  const defoultContext = useContext(Context)
  const [context] = useState<iContext>(defoultContext)

  const totalWasteRemovalCosts = useTotalWasteRemovalCosts(defaultAmountDays, defaultDayCost)
  const sumWasteEnergy = useSumWasteEnergy(Number(ultimate1500.power), defaultEnergyTariff, defaultTimeWork, defaultAmountDays)
  const sumWasteWater = useSumWasteWater(defaultUserOnDay, defaultAmountDays, defaultWaterTariff)

  useEffect(()=>{
    context.energyTariff = defaultEnergyTariff
    context.waterTariff = defaultWaterTariff
    context.dayCost = defaultDayCost
    context.totalCost = totalWasteRemovalCosts
    context.timeWork = defaultTimeWork
    context.wasteEnergy = sumWasteEnergy
    context.wasteWater = sumWasteWater
    context.userOnDay = defaultUserOnDay
    context.partBioGarbage = defaultPartBioGarbage
    context.amountDays = defaultAmountDays
  }, [])

  const costTotal = (e: any) => {
    e.preventDefault()
    console.log(context)

    // e.currentTarget.querySelectorAll('input').forEach(function (field: any) {
    //   console.log(field.name + "=" + field.value);
    // });

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
              <Typography variant="h5">
                Тарифы
              </Typography>
              <CustomTextField idProps='energyTariff' labelProps='Тариф электроэнергии' helperProps='Стоимость 1кВт/час, руб' defaultValueProps={defaultEnergyTariff} />
              <CustomTextField idProps='waterTariff' labelProps='Тариф холодной воды' helperProps='Стоимость 1м3, руб' defaultValueProps={defaultWaterTariff} />
            </Card>

            <Card sx={CardStyle}>
              <Typography variant="h5">
                Затраты на вывоз мусора
              </Typography>
              <div className={styles.Items}>
                <CustomTextField idProps='dayCost' labelProps='Затраты на вывоз мусора в день' helperProps='Затраты за один день работы, руб' defaultValueProps={defaultDayCost} />
                <CustomTextField idProps='totalCost' labelProps='Общие затраты на вывоз мусора' helperProps='Сумма текущих затрат на вывоз мусора, руб' defaultValueProps={totalWasteRemovalCosts} />
              </div>
            </Card>

            <Card sx={CardStyle}>
              <Typography variant="h5">
                Расход измельчителя
              </Typography>
              <div className={styles.Items}>
                <CustomTextField idProps='timeWork' labelProps='Время работы измельчителя' helperProps='В сутки, час' defaultValueProps={defaultTimeWork} />
                <CustomTextField idProps='wasteEnergy' labelProps='Расход электроэнергии' helperProps='Дополнительный расход на оплату электроэнергии при работе измельчителя, руб' defaultValueProps={sumWasteEnergy} />
                <CustomTextField idProps='wasteWater' labelProps='Расход воды' helperProps='Дополнительный расход на оплату воды при работе измельчителя, руб' defaultValueProps={sumWasteWater} />
              </div>
            </Card>

            <Card sx={CardStyle}>
              <Typography variant="h5">
                Работа ресторана
              </Typography>
              <div className={styles.Items}>
                <CustomTextField idProps='userOnDay' labelProps='Количество клиентов в день' helperProps='Среднее значение по Москве, чел' defaultValueProps={defaultUserOnDay} />
                <CustomTextField idProps='partBioGarbage' labelProps='Доля биомусора' helperProps='Относительно общего кол-ва мусора, %' defaultValueProps={defaultPartBioGarbage} />
                <CustomTextField idProps='amountDays' labelProps='Календарные дни' helperProps='Период работы, дни' defaultValueProps={defaultAmountDays} />
              </div>
            </Card>
          </div>
          <div className={styles.Coster}>
            <CustomSelectField />
            <CostButton />
          </div>
        </form>
      </div >
    </Context.Provider>
  )
}

export default App
