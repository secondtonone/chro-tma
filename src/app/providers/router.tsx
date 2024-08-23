import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { commons } from '@/shared';

import { RootLayout } from '../layouts';

const MainPage = lazy(() => import('@/pages/main'));

const router = createBrowserRouter([
  {
    path: commons.index,
    element: <RootLayout />,
    children: [
      {
        path: commons.index,
        element: (
          <Suspense>
            <MainPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
