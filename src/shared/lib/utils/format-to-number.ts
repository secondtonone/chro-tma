export const formatToNumber = (value: string) =>
  parseFloat(value.replaceAll(/\s/g, ''));
