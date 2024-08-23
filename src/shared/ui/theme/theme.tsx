import { FC, useState } from 'react';

import { THEME_DEFAULT_COLOR_RGB, useTheme } from '@/shared';
import { useThemeParams } from '@telegram-apps/sdk-react';

import { ThemeContext } from './ThemeContext';

interface ICustomThemeProps {
  children: React.ReactNode;
}

const CustomTheme: FC<ICustomThemeProps> = ({ children }) => {
  const scheme = useThemeParams();

  const [mainColor, setMainColor] = useState(THEME_DEFAULT_COLOR_RGB);

  useTheme();

  return (
    <ThemeContext.Provider
      value={{
        mainColor,
        setMainColor,
        scheme: scheme.isDark ? 'dark' : 'light',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default CustomTheme;
