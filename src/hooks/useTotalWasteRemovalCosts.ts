export const useTotalWasteRemovalCosts = (amountDays: number, costDay: number) => {
  return amountDays * costDay
}
// подсчет общей суммы расходов ресторана на вывоз мусора
// кол-во дней * стоимость вывоза на день