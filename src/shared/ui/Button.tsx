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
      className={`w-full px-6 py-4 bg-[#009be0] rounded-xl text-center text-white text-base font-semibold leading-tight ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
