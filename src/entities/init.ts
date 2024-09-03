import { countriesQuery, init as countryInit } from '@/entities/country';
import { currenciesQuery, init as currencyInit } from '@/entities/currency';
import { init as flowInit } from '@/entities/flow';
import { init as queryInit } from '@/entities/query';
import { events, init as transferRulesInit } from '@/entities/transfer-rules';
import {
  events as userLogEvents,
  init as userLogInit,
} from '@/entities/user-log';

export const init = () => {
  queryInit({
    $countries: countriesQuery.$data,
    $currencies: currenciesQuery.$data,
    sendData: events.startTransferRulesQuery,
    userLog: userLogEvents.logTgUser,
  });
  flowInit();
  countryInit();
  currencyInit();
  transferRulesInit();
  userLogInit();
};
