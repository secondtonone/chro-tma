import { sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { once } from 'patronum/once';

import { baseUrl } from '@/shared';
import { concurrency, createJsonQuery, declareParams } from '@farfetched/core';

import { type CurrenciesParams, CurrenciesContract } from './contracts';

export const CurrencyPageGate = createGate<Partial<CurrenciesParams>>();

export const currenciesQuery = createJsonQuery({
  initialData: [],
  params: declareParams<Partial<CurrenciesParams>>(),
  request: {
    method: 'GET',
    url: baseUrl('/api/v1/global-objects/currencies'),
    query: (params) => params,
  },
  response: {
    contract: CurrenciesContract,
    mapData({ result }) {
      return result;
    },
  },
});

concurrency(currenciesQuery, { strategy: 'TAKE_LATEST' });

export function init() {
  sample({
    clock: once(CurrencyPageGate.open),
    target: currenciesQuery.start,
  });
}

export const useCurrenciesQuery = () => useUnit(currenciesQuery);

const useCurrencyGate = () => useGate(CurrencyPageGate);

export const gates = {
  useCurrencyGate,
};

export const events = {
  startCurrenciesQuery: currenciesQuery.start,
};

export const selectors = {
  useCurrenciesQuery,
};
