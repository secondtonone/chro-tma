import { /* useContext, */ useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import config from '@/config';
/* 
import { ThemeContext } from '@/shared'; */
import { swipeBehavior, viewport as vp } from '@telegram-apps/sdk-react';

export default function RootLayout() {
  /*   const { mainColor } = useContext(ThemeContext);
  const miniApp = useMiniApp(); */

  useEffect(() => {
    if (!config.isBrowser)
    {
      vp?.expand();
      if (swipeBehavior.isSupported()) swipeBehavior.disableVertical();
    }
  }, []);

  /* useEffect(() => {
    // @ts-expect-error
    miniApp?.setHeaderColor(mainColor);
    miniApp?.setBgColor('#000');
  }, [miniApp, mainColor]); */

  return <Outlet />;
}
