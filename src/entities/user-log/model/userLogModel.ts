import { sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { once } from 'patronum/once';

import { baseUrl } from '@/shared';
import {
  createJsonMutation,
  declareParams,
  unknownContract,
} from '@farfetched/core';

import { type UserCreateParams, type UserLogParams } from './contracts';

export const UserLogPageGate = createGate<UserCreateParams['tg_user']>();

const userCreateMutation = createJsonMutation({
  params: declareParams<UserCreateParams['tg_user']>(),
  request: {
    method: 'POST',
    url: baseUrl('/api/v1/user-log/tg-user'),
    body: (tg_user) => ({ tg_user }),
  },
  response: {
    contract: unknownContract,
    /* status: {
      expected: 200,
    }, */
  },
});

const userLogMutation = createJsonMutation({
  params: declareParams<Partial<UserLogParams>>(),
  request: {
    method: 'POST',
    url: baseUrl('/api/v1/user-log/tg-user-log'),
    body: (params) => params,
  },
  response: {
    contract: unknownContract,
    /* status: {
      expected: 200,
    }, */
  },
});

export function init() {
  sample({
    clock: once(UserLogPageGate.state),
    filter: (tg_user) => !!tg_user,
    target: userCreateMutation.start,
  });
}

export const useUserLogPageGate = (id: UserCreateParams['tg_user']) =>
  useGate(UserLogPageGate, id);
export const useUserCreateMutation = () => useUnit(userCreateMutation);
export const useLogCreateMutation = () => useUnit(userLogMutation);
export const useUserCreatePending = () => useUnit(userCreateMutation.$pending);
export const useLogCreatePending = () => useUnit(userLogMutation.$pending);

export const events = {
  createTgUser: userCreateMutation.start,
  logTgUser: userLogMutation.start,
};

export const selectors = {
  useUserCreateMutation,
  useLogCreateMutation,
  useUserCreatePending,
  useLogCreatePending,
};

export const gates = {
  useUserLogPageGate,
};
