import { sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { once } from 'patronum/once';

import { baseUrl } from '@/shared';
import { concurrency, createJsonQuery } from '@farfetched/core';

import { CountriesContract } from './contracts';

export const CountryPageGate = createGate();

export const countriesQuery = createJsonQuery({
  initialData: [],
  request: {
    method: 'GET',
    url: baseUrl('/api/v1/global-objects/countries'),
  },
  response: {
    contract: CountriesContract,
    mapData({ result }) {
      return result;
    },
  },
});

concurrency(countriesQuery, { strategy: 'TAKE_LATEST' });

export function init() {
  sample({
    clock: once(CountryPageGate.open),
    target: countriesQuery.start,
  });
}

export const useCountriesQuery = () => useUnit(countriesQuery);

const useCountryGate = () => useGate(CountryPageGate);

export const gates = {
  useCountryGate,
};

export const events = {
  startCountriesQuery: countriesQuery.start,
};

export const selectors = {
  useCountriesQuery,
};
