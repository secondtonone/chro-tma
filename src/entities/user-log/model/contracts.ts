import { type UnContract, obj, str } from '@withease/contracts';

export const UserCreateParamsContract = obj({
  tg_user: str,
});

export const UserLogParamsContract = obj({
  tg_user: str,
  url_log: str,
  amount_log: str,
  currency_log: str,
  send_country_log: str,
  receive_country_log: str,
});

export type UserLogParams = UnContract<typeof UserLogParamsContract>;
export type UserCreateParams = UnContract<typeof UserCreateParamsContract>;
