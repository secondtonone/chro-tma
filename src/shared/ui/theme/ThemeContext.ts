import { createContext } from 'react';

import { MiniAppHeaderColor } from '@telegram-apps/sdk-react';

export interface IThemeContext {
  mainColor: string | MiniAppHeaderColor;
  setMainColor: (mainColor: string) => void;
  scheme: string;
}

export const ThemeContext = createContext<IThemeContext>({
  mainColor: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMainColor: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scheme: 'light',
} as IThemeContext);
