import { PropsWithChildren } from 'react';

export interface ITitleProps extends PropsWithChildren {}

export function Title({ children }: ITitleProps) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full bg-background py-6 text-center text-[28px] font-semibold leading-tight text-[#101112] shadow-2xl shadow-background dark:text-white">
      {children}
    </div>
  );
}
