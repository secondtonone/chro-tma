import {
  createApi,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';

import { type IQuery } from '../types';

export const QueryGate = createGate();
// indexes of cards in hand
export const $query = createStore<IQuery>({
  countryFrom: 'Россия',
  countryTo: 'Узбекистан',
  currency: 'RUB',
  amount: 0,
});

export const submitData = createEvent();

export const sendDataFx = createEffect(async (params: IQuery) => {
  return Promise.resolve({
    ...params,
  });
});

export const queryApi = createApi($query, {
  changeCountryFrom: (user, countryFrom: string) => ({ ...user, countryFrom }),
  changeCountryTo: (user, countryTo: string) => ({ ...user, countryTo }),
  changeCurrency: (user, currency: string) => ({ ...user, currency }),
  changeAmount: (user, amount: number) => ({ ...user, amount }),
});

const handleChangeAmount = queryApi.changeAmount.prepend<{
  target: HTMLInputElement | HTMLTextAreaElement;
}>((event) =>
  !Number.isNaN(parseFloat(event.target.value))
    ? parseFloat(event.target.value)
    : 0
);

export const init = () => {
  $query.reset(QueryGate.open);

  sample({
    clock: submitData,
    source: $query,
    target: sendDataFx,
  });
};

const useQuery = () => useUnit($query);

export const events = {
  ...queryApi,
  handleChangeAmount,
  submitData,
};

export const selectors = {
  useQuery,
};

const useQueryGate = () => useGate(QueryGate);

export const gates = {
  useQueryGate,
};
