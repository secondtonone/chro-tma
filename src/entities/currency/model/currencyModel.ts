import { sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { once } from 'patronum/once';

import { baseUrl } from '@/shared';
import { concurrency, createJsonQuery } from '@farfetched/core';

import { CurrenciesContract } from './contracts';

export const CurrencyPageGate = createGate();

export const currenciesQuery = createJsonQuery({
  initialData: [],
  request: {
    method: 'GET',
    url: baseUrl('/api/v1/global-objects/currencies'),
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
