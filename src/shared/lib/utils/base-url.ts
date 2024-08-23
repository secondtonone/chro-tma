import config from '@/config';

export function baseUrl(path: string) {
  return `${config.apiUrl}${path}`;
}
