import { type UnContract, arr, bool, obj, str } from '@withease/contracts';

export const CurrencyContract = obj({
  id: str,
  name: str,
  symbol: str,
  abbreviation: str,
});

export const CurrenciesParamsContract = obj({
  order: str,
  order_desc: bool,
});

export const CurrenciesContract = arr(CurrencyContract);

export type Currency = UnContract<typeof CurrencyContract>;
export type Currencies = UnContract<typeof CurrenciesContract>;

export type CurrenciesParams = UnContract<typeof CurrenciesParamsContract>;
