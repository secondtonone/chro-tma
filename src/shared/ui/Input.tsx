export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const Input: React.FC<IInputProps> = ({
  label,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex-col items-center justify-start gap-2 ${className}`}>
      <label
        htmlFor={rest.name}
        className="text-xs font-medium uppercase leading-[13px] tracking-tight text-[#3c3c43]/60 dark:text-white"
      >
        {label}
      </label>
      <input
        type="text"
        id={rest.name}
        className="w-full rounded-2xl border-none bg-zinc-100 p-4 text-base font-medium leading-[32px] text-[#101112] hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white"
        {...rest}
      />
    </div>
  );
};
