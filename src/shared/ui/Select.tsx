import { ChevronIcon } from './ChevronIcon';

export interface ISelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  prefixEl?: React.ReactNode;
}

export const Select: React.FC<ISelectProps> = ({
  label,
  prefixEl,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex-col items-center justify-start gap-2 ${className}`}>
      <label className="text-xs font-medium uppercase leading-[13px] tracking-tight text-[#3c3c43]/60">
        {label}
      </label>
      <div className="relative">
        {prefixEl && (
          <div className="pointer-events-none absolute left-4 top-1/2 h-8 w-8 -translate-y-1/2 text-[#545458]">
            {prefixEl}
          </div>
        )}
        <input
          type="text"
          className={`${prefixEl ? 'pl-[56px]' : ''} w-full rounded-2xl border-none bg-zinc-100 p-4 pr-[52px] text-base font-medium leading-[32px] text-[#101112]`}
          {...rest}
        />
        <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#545458]" />
      </div>
    </div>
  );
};
