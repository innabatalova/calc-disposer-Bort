import { useContext } from 'react'
import { Card, Typography } from '@mui/material'

import { CustomTextField } from "../../components/CustomTextField"

import { IContext } from '../../context/IContext'

import { BlockResultStyle } from './miu-styles/BlockResultStyle.style'
import styles from '../../App.module.css'

import Context from '../../context/context'

export const CustomBlockResult = () => {
  const context = useContext<IContext>(Context)

  return (
    <Context.Provider value={context}>
      <Card sx={BlockResultStyle}>
        <Typography variant="h6">
          Итого:
        </Typography>
        <div className={styles.Items}>
          <CustomTextField idProps='wasteEnergy' labelProps='Расход электроэнергии'
            helperProps='Доп.расход на оплату электроэнергии при работе измельчителя, руб' variantProps='filled'
            disabledProps={true} valueProps={context.wasteEnergy} />

          <CustomTextField idProps='wasteWater' labelProps='Расход воды'
            helperProps='Доп.расход на оплату воды при работе измельчителя, руб' variantProps='filled'
            disabledProps={true} valueProps={context.wasteWater} />

          <CustomTextField idProps='totalCost' labelProps='Общие затраты на вывоз мусора'
            helperProps='Сумма текущих затрат на вывоз мусора, руб' variantProps='filled'
            disabledProps={true} valueProps={context.totalCost} />

          <CustomTextField idProps='recalResult' labelProps='Выгода от использования'
            helperProps='Выгода от использования, руб' variantProps='filled'
            disabledProps={true} valueProps={context.recalResult} />
          <Typography>
            За счет снижения общего количества биоразлагаемого мусора на {context.partBioGarbage}%,
            общие затраты на вывоз мусора уменьшаются на {context.partBioGarbage}% за вычетом расхода 
            на коммунальные услуги, необходимые для обеспечения работы измельчителя.
          </Typography>

          <CustomTextField idProps='savingResult' labelProps='Экономия за указанный период'
            helperProps='Экономия за указанный период, руб' variantProps='filled'
            disabledProps={true} valueProps={context.savingResult} />

          <CustomTextField idProps='paybackResult' labelProps='Окупаемость в днях'
            helperProps='Окупаемость, дни' variantProps='filled'
            disabledProps={true} valueProps={context.paybackResult} />
        </div>
      </Card>
    </Context.Provider>
  )
}