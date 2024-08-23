import { useLayoutEffect } from 'react';

export function useTheme() {
  useLayoutEffect(() => {
    const handler = (e?: MediaQueryListEvent) => {
      if (
        e?.matches ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };

    handler();

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handler);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handler);
    };
  }, []);
}
