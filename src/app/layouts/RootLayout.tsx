import { /* useContext, */ useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import config from '@/config';
/* 
import { ThemeContext } from '@/shared'; */
import {
  /* useMiniApp, */
  useSwipeBehaviorRaw,
  useViewport,
} from '@telegram-apps/sdk-react';

export default function RootLayout() {
  /*   const { mainColor } = useContext(ThemeContext);
  const miniApp = useMiniApp(); */
  const vp = useViewport();
  const { result: swipeBehavior } = useSwipeBehaviorRaw();

  useEffect(() => {
    if (!config.isBrowser) {
      vp?.expand();
      swipeBehavior?.disableVerticalSwipe();
    }
  }, [swipeBehavior, vp]);

  /* useEffect(() => {
    // @ts-expect-error
    miniApp?.setHeaderColor(mainColor);
    miniApp?.setBgColor('#000');
  }, [miniApp, mainColor]); */

  return <Outlet />;
}
