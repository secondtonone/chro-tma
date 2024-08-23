export function getTimeDescription({
  days,
  hours,
  minutes,
}: {
  days: number;
  hours: number;
  minutes: number;
}): string {
  const totalMinutes = days * 24 * 60 + hours * 60 + minutes;

  if (totalMinutes === 0) {
    return 'Моментально';
  }

  const totalDays = totalMinutes / (24 * 60);

  if (totalDays <= 1) {
    return 'В течение дня';
  }

  const roundedDays = Math.ceil(totalDays);
  return `В течение ${roundedDays} дней`;
}
