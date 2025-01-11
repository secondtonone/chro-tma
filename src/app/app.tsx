import { RouterProvider } from 'react-router-dom';

import { init } from '@/entities/init';
import { Theme } from '@/shared';
import {
  $debug,
  backButton,
  closingBehavior,
  init as initSdk,
  isTMA,
  miniApp,
  swipeBehavior,
  themeParams,
  initData as userData,
  viewport,
} from '@telegram-apps/sdk-react';

import { router } from './providers';

import '@/app/global.css';

$debug.set(import.meta.env.DEV);

init();

if (isTMA('simple'))
{
  initSdk();

  userData.restore();
  viewport
    .mount()
    .catch((e) => {
      console.error('Something went wrong mounting the viewport', e);
    })
    .then(() => {
      viewport.bindCssVars();
    });
  miniApp.mount();
  backButton.mount();
  if (swipeBehavior.isSupported()) swipeBehavior.mount();
  closingBehavior.mount();
  themeParams.mount();

  miniApp.bindCssVars();
  themeParams.bindCssVars();
}

const App = (): JSX.Element => {
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
};

export default App;
