import { RouterProvider } from 'react-router-dom';

import { init } from '@/entities/init';
import { Theme } from '@/shared';
import { SDKProvider } from '@telegram-apps/sdk-react';

import { router } from './providers';

init();

const App = (): JSX.Element => {
  return (
    <SDKProvider acceptCustomStyles debug>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </SDKProvider>
  );
};

export default App;
