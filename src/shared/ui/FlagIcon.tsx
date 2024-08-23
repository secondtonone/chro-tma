import { lazy, Suspense } from 'react';

const Flag = lazy(() => import('react-world-flags'));

export interface IFlagIconProps {
  code?: string;
}

export default function FlagIcon({ code }: IFlagIconProps) {
  return (
    <Suspense fallback={<div className="bg-gray h-8 w-8 scale-[2]" />}>
      <Flag
        className="h-8 w-8 scale-[2]"
        code={code}
        fallback={<div className="bg-gray" />}
      />
    </Suspense>
  );
}
