export const useSumWasteEnergy = (power: number, energy: number, time: number, days: number) => {
  const costkW = 1000

  return (power / costkW) * energy * time * days
}
// подсчет доп расходов ресторан на электроэнергию при установке измельчителя
// (мощность измельчителя / 1000) - считаем кВт
//  затем умножить на тариф э/э * время работы в сутки * дни в месяце