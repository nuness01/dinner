import type { Day } from "@prisma/client";
import {
  add,
  addMinutes,
  getHours,
  getMinutes,
  isBefore,
  isEqual,
  parse,
} from "date-fns";
import { now, OPENING_HOURS_INTERVAL } from "src/constants/config";

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);


export const weekdayIndexToName = (index: number) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return days[index];
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const roundToNearestMinutes = (date: Date, interval: number) => {
  const minutesLeftUntilNextInterval = interval - (getMinutes(date) % interval);
  return addMinutes(date, minutesLeftUntilNextInterval);
};

export const getOpeningTimes = (startDate: Date, dbDays: Day[]) => {
  const dayOfWeek = startDate.getDay();
  const isToday = isEqual(startDate, new Date().setHours(0, 0, 0, 0));

  const today = dbDays.find((d) => d.dayOfWeek === dayOfWeek);
  if (!today) throw new Error("This day does not exist in the database");

  const opening = parse(today.openTime, "kk:mm", startDate);
  const closing = parse(today.closeTime, "kk:mm", startDate);

  let hours: number;
  let minutes: number;

  if (isToday) {
    const rounded = roundToNearestMinutes(now, OPENING_HOURS_INTERVAL);
    const tooLate = !isBefore(rounded, closing);
    if (tooLate) throw new Error("No more bookings today");

    const isBeforeOpening = isBefore(rounded, opening);

    hours = getHours(isBeforeOpening ? opening : rounded);
    minutes = getMinutes(isBeforeOpening ? opening : rounded);
  } else {
    hours = getHours(opening);
    minutes = getMinutes(opening);
  }

  const beginning = add(startDate, { hours, minutes });
  const end = add(startDate, {
    hours: getHours(closing),
    minutes: getMinutes(closing),
  });
  const interval = OPENING_HOURS_INTERVAL;

  const times = [];
  for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
    times.push(i);
  }

  return times;
};
