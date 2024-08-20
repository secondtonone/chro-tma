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
      <label className="text-xs font-medium uppercase leading-[13px] tracking-tight text-[#3c3c43]/60">
        {label}
      </label>
      <input
        type="text"
        className="w-full rounded-2xl border-none bg-zinc-100 p-4 text-base font-medium leading-[32px] text-[#101112]"
        {...rest}
      />
    </div>
  );
};
