import { Contract } from '@withease/contracts';

export const stringNotEmpty = (error = ''): Contract<unknown, boolean> => ({
  // @ts-expect-error Incorrect library type
  isData: (data: string) => data.length > 0,
  getErrorMessages: () => [error],
});
