import { type UnContract, arr, obj, str } from '@withease/contracts';

export const CurrencyContract = obj({
  id: str,
  name: str,
  symbol: str,
  abbreviation: str,
});

export const CurrenciesContract = arr(CurrencyContract);

export type Currency = UnContract<typeof CurrencyContract>;
export type Currencies = UnContract<typeof CurrenciesContract>;
