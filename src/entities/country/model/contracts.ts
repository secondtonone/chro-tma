import { type UnContract, arr, bool, obj, str } from '@withease/contracts';

export const CountryContract = obj({
  id: str,
  name: str,
  abbreviation: str,
  local_currency: obj({
    id: str,
    name: str,
    symbol: str,
    abbreviation: str,
  }),
});

export const CountriesParamsContract = obj({
  order: str,
  order_desc: bool,
});

export const CountriesContract = arr(CountryContract);

export type Country = UnContract<typeof CountryContract>;
export type Countries = UnContract<typeof CountriesContract>;

export type CountriesParams = UnContract<typeof CountriesParamsContract>;
