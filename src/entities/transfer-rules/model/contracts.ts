import {
  type UnContract,
  arr,
  bool,
  nothing,
  num,
  obj,
  or,
  str,
} from '@withease/contracts';

export const TransferRuleContract = obj({
  send_country: obj({
    id: str,
    name: str,
    abbreviation: str,
    local_currency: obj({
      id: str,
      name: str,
      symbol: str,
      abbreviation: str,
    }),
  }),
  receive_country: obj({
    id: str,
    name: str,
    abbreviation: str,
    local_currency: obj({
      id: str,
      name: str,
      symbol: str,
      abbreviation: str,
    }),
  }),
  original_currency: or(
    obj({
      id: str,
      name: str,
      symbol: str,
      abbreviation: str,
    }),
    nothing
  ),
  rules: arr(
    obj({
      id: str,
      provider: obj({
        id: str,
        name: str,
        url: str,
        logo: or(str, nothing),
      }),
      transfer_method: str,
      min_transfer_time: obj({
        days: num,
        hours: num,
        minutes: num,
      }),
      max_transfer_time: obj({
        days: num,
        hours: num,
        minutes: num,
      }),
      required_documents: arr(
        obj({
          id: str,
          name: str,
        })
      ),
      original_amount: or(num, nothing),
      converted_amount: or(num, nothing),
      transfer_currency: obj({
        id: str,
        name: str,
        symbol: str,
        abbreviation: str,
      }),
      amount_received: or(num, nothing),
      transfer_fee: or(num, nothing),
      transfer_fee_percentage: num,
      min_transfer_amount: num,
      max_transfer_amount: num,
      exchange_rate: or(num, nothing),
      conversion_path: arr(str),
    })
  ),
});

export const TransferRuleParamsContract = obj({
  send_country_id: str,
  receive_country_id: str,
  optional_from_currency_id: str,
  optional_amount: num,
  order: str,
  order_desc: bool,
});

export const TransferRulesContract = arr(TransferRuleContract);

export type TransferRule = UnContract<typeof TransferRuleContract>;
export type TransferRuleParams = UnContract<typeof TransferRuleParamsContract>;
export type TransferRules = UnContract<typeof TransferRulesContract>;
