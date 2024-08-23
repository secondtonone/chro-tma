import { countriesQuery, init as countryInit } from '@/entities/country';
import { currenciesQuery, init as currencyInit } from '@/entities/currency';
import { init as flowInit } from '@/entities/flow';
import { init as queryInit } from '@/entities/query';
import { events, init as transferRulesInit } from '@/entities/transfer-rules';

export const init = () => {
  queryInit(
    countriesQuery.$data,
    currenciesQuery.$data,
    events.startTransferRulesQuery
  );
  flowInit();
  countryInit();
  currencyInit();
  transferRulesInit();
};
