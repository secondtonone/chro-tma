import { type UnContract, arr, obj, str } from '@withease/contracts';

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

export const CountriesContract = arr(CountryContract);

export type Country = UnContract<typeof CountryContract>;
export type Countries = UnContract<typeof CountriesContract>;
