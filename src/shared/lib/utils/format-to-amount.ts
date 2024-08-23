import { formatToNumber } from './format-to-number';

export const formatToAmount = (value: string) =>
  !Number.isNaN(formatToNumber(value))
    ? `${new Intl.NumberFormat('fr-FR').format(formatToNumber(value))}`
    : '0';
