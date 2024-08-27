import { and, num, obj, str } from '@withease/contracts';

import { stringNotEmpty } from '../lib/validators';

export const QueryParams = obj({
  optional_amount: num,
  send_country_id: and(str, stringNotEmpty('Выберите страну отправления')),
  receive_country_id: str,
  optional_from_currency_id: str,
});
