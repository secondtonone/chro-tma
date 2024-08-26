import { sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { once } from 'patronum/once';

import { baseUrl } from '@/shared';
import { concurrency, createJsonQuery, declareParams } from '@farfetched/core';

import { type CountriesParams, CountriesContract } from './contracts';

export const CountryPageGate = createGate<Partial<CountriesParams>>();

export const countriesQuery = createJsonQuery({
  initialData: [],
  params: declareParams<Partial<CountriesParams>>(),
  request: {
    method: 'GET',
    url: baseUrl('/api/v1/global-objects/countries'),
    query: (params) => params,
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
