import { useUnit } from 'effector-react';

import { baseUrl } from '@/shared';
import { concurrency, createJsonQuery, declareParams } from '@farfetched/core';

import {
  type TransferRuleParams,
  TransferRule,
  TransferRuleContract,
} from './contracts';

const transferRulesQuery = createJsonQuery({
  initialData: {
    rules: [] as TransferRule['rules'],
  } as TransferRule,
  params: declareParams<Partial<TransferRuleParams>>(),
  request: {
    method: 'GET',
    url: baseUrl('/api/v1/transfer-rules-filtered'),
    query: (params) => params,
  },
  response: {
    contract: TransferRuleContract,
  },
});

concurrency(transferRulesQuery, { strategy: 'TAKE_LATEST' });

export function init() {}

export const useTransferRulesQuery = () => useUnit(transferRulesQuery);

export const events = {
  startTransferRulesQuery: transferRulesQuery.start,
};

export const selectors = {
  useTransferRulesQuery,
};
