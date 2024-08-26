import { useEffect } from 'react';

import { useBackButton } from '@telegram-apps/sdk-react';

export function useHandleBack(handler: () => void) {
  const backButton = useBackButton();

  useEffect(() => {
    backButton.show();
    backButton.on('click', handler);
    return () => backButton.hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
