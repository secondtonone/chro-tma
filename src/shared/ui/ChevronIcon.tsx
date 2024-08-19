import { SVGProps } from 'react';

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 1L7 7L1 0.999999"
      stroke="currentColor"
      strokeOpacity="0.65"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
