import type { Day } from '@prisma/client'
import { add, addMinutes, getHours, getMinutes, isBefore, isEqual, parse } from 'date-fns'
import { categories, now, OPENING_HOURS_INTERVAL } from 'src/constants/config'

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const selectOptions = categories.map((category) => ({ value: category, label: capitalize(category) }))

export const weekdayIndexToName = (index: number) => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return days[index]
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export const roundToNearestMinutes = (date: Date, interval: number) => {
  const minutesLeftUntilNextInterval = interval - (getMinutes(date) % interval)
  return addMinutes(date, minutesLeftUntilNextInterval)
  
}




