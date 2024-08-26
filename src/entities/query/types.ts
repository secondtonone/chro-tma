import type { Country, Currency, TransferRuleParams } from '../x';

export interface IQuery {
  countryFrom: Country;
  countryTo: Country;
  currency: Currency;
  optional_amount: string;
}

export type IQueryIds = Omit<
  TransferRuleParams,
  'optional_amount' | 'order' | 'order_desc'
>;
