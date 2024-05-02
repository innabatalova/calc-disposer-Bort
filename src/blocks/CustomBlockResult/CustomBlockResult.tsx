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
          <CustomTextField idProps='totalCost' labelProps='Общие затраты на вывоз мусора'
            helperProps='Сумма текущих затрат на вывоз мусора, руб' variantProps='filled'
            disabledProps={true} valueProps={context.totalCost} />

          <CustomTextField idProps='recalResult' labelProps='Выгода от использования'
            helperProps='Выгода от использования, руб' variantProps='filled'
            disabledProps={true} valueProps={context.recalResult} />

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