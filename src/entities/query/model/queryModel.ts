import {
  type Store,
  combine,
  createApi,
  createEvent,
  createStore,
  EventCallable,
  sample,
} from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';

import type {
  Countries,
  Country,
  Currencies,
  Currency,
  TransferRuleParams,
} from '@/entities/x';
import { filterObject, formatToAmount, formatToNumber } from '@/shared';

import type { IQuery, IQueryIds } from '../types';

export const QueryGate = createGate();
export const changeAmount = createEvent<string>();

export const $query = createStore<IQuery>({
  countryFrom: {
    name: '',
    abbreviation: '',
  },
  countryTo: {
    name: '',
    abbreviation: '',
  },
  currency: {
    abbreviation: '',
  },
  optional_amount: '0',
} as IQuery);

export const $queryIds = createStore<IQueryIds>({
  send_country_id: '',
  receive_country_id: '',
  optional_from_currency_id: '',
});

export const $params = combine($query, $queryIds, (query, queryIds) => ({
  ...queryIds,
  optional_amount: formatToNumber(query.optional_amount),
}));

$params.watch((params) => console.log(params));

export const submitData = createEvent();

export const queryApi = createApi($queryIds, {
  changeCountryFrom: (query, send_country_id: Country['id']) => ({
    ...query,
    send_country_id,
  }),
  changeCountryTo: (query, receive_country_id: Country['id']) => ({
    ...query,
    receive_country_id,
  }),
  changeCurrency: (query, optional_from_currency_id: Currency['id']) => ({
    ...query,
    optional_from_currency_id,
  }),
});

const handleChangeAmount = changeAmount.prepend<{
  target: HTMLInputElement | HTMLTextAreaElement;
}>((event) => formatToAmount(event.target.value));

export const init = (
  $countries: Store<Countries>,
  $currencies: Store<Currencies>,
  sendData: EventCallable<Partial<TransferRuleParams>>
) => {
  $query.reset(QueryGate.open);

  sample({
    clock: submitData,
    source: $params,
    fn: (params) =>
      filterObject(params, (value) => !(value === '' || value === 0)),
    target: sendData,
  });

  sample({
    clock: queryApi.changeCountryFrom,
    source: {
      countries: $countries,
      query: $query,
    },
    fn: ({ countries, query }, id) => ({
      ...query,
      countryFrom: countries.find((country) => id === country.id) as Country,
    }),
    target: $query,
  });

  sample({
    clock: queryApi.changeCountryTo,
    source: {
      countries: $countries,
      query: $query,
    },
    fn: ({ countries, query }, id) => ({
      ...query,
      countryTo: countries.find((country) => id === country.id) as Country,
    }),
    target: $query,
  });

  sample({
    clock: queryApi.changeCurrency,
    source: {
      currencies: $currencies,
      query: $query,
    },
    fn: ({ currencies, query }, id) => ({
      ...query,
      currency: currencies.find((currency) => id === currency.id) as Currency,
    }),
    target: $query,
  });

  $query.on(changeAmount, (query, optional_amount) => ({
    ...query,
    optional_amount,
  }));
};

const useQuery = () => useUnit($query);
const useQueryIds = () => useUnit($queryIds);

export const events = {
  ...queryApi,
  handleChangeAmount,
  submitData,
};

export const selectors = {
  useQuery,
  useQueryIds,
};

const useQueryGate = () => useGate(QueryGate);

export const gates = {
  useQueryGate,
};
