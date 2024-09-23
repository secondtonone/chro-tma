import { axios } from '@/shared';

import type { UserLogParams } from '../types';

export const sendUserLog = async (params: Partial<UserLogParams>) => {
  try {
    const response = await axios.post('/api/v1/user-log/tg-user-log', {
      ...params,
    });

    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};
