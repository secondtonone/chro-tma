import type { FC, PropsWithChildren } from 'react';

import { a, useSpring } from '@react-spring/web';
import { useHover } from '@use-gesture/react';

export interface ITooltipProps extends PropsWithChildren {
  className?: string;
  message: React.ReactNode;
}

export const Tooltip: FC<ITooltipProps> = ({
  children,
  className,
  message,
}) => {
  const [animationProps, api] = useSpring(() => ({
    opacity: 0,
    scale: 0,
  }));

  const bind = useHover((state) => {
    if (state.hovering) {
      api.start({
        opacity: 1,
        scale: 1,
      });
    } else {
      api.start({
        opacity: 0,
        scale: 0,
      });
    }
  });

  return (
    <div className="relative w-full" {...bind()}>
      {children}
      <a.span
        className={`absolute top-[125%] z-50 origin-top-left rounded p-2 text-sm opacity-0 ${className}`}
        style={animationProps}
      >
        {message}
      </a.span>
    </div>
  );
};
