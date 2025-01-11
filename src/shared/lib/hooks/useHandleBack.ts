import { useEffect } from 'react';

import { backButton } from '@telegram-apps/sdk-react';

export function useHandleBack(handler: () => void) {
  useEffect(() => {
    if (backButton.isSupported()) {
      backButton.show();
      backButton.onClick(handler);
      return () => backButton.hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
