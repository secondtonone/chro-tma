import { createEvent, createStore, sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';

import type { Stage } from '../types';

const START_STAGE = /* 'form' */ 'currency';

export const FlowGate = createGate();

export const $stage = createStore<Stage>(START_STAGE);

export const setStage = createEvent<Stage>();

export const init = () => {
  sample({
    clock: setStage,
    target: $stage,
  });
};

export const useStage = () => useUnit($stage);

const useFlowGate = () => useGate(FlowGate);

export const gates = {
  useFlowGate,
};

export const events = {
  setStage,
};

export const selectors = {
  useStage,
};
