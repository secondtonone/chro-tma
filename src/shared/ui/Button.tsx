import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`w-full rounded-xl bg-[#009be0] px-6 py-4 text-center text-base font-semibold leading-tight text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
