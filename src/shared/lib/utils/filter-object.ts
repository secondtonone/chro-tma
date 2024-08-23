export function filterObject<
  T extends Record<string, string | number | boolean>,
>(obj: T, condition: (value: string | number | boolean) => boolean): T {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (condition(value)) {
      return { ...acc, [key]: value };
    }
    return { ...acc };
  }, {} as T);
}
