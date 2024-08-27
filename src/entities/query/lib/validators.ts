import { Contract } from '@withease/contracts';

export const stringNotEmpty = (error = ''): Contract<unknown, boolean> => ({
  isData: (data: string) => data.length > 0,
  getErrorMessages: () => [error],
});
