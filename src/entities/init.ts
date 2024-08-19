import { init as flowInit } from '@/entities/flow';
import { init as queryInit } from '@/entities/query';

export const init = () => {
  queryInit();
  flowInit();
};
