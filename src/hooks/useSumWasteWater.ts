export const useSumWasteWater = (users: number, days: number, water: number) => {
  const costkB = 1000
  const costLiterOnUser = 3

  return (users * days * (costLiterOnUser / costkB)) * water
}
// подсчет доп расходов ресторан на хол воду при установке измельчителя
// кол-во посетителей в сутки * дни в месяце * (пересчет с литров на кубометры расхода воды) * тариф за воду