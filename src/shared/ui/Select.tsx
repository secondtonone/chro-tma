import { ChevronIcon } from './ChevronIcon';

export interface ISelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  prefixEl?: React.ReactNode;
}

export const Select: React.FC<ISelectProps> = ({ label, prefixEl, className = '', ...rest }) => {
  return (
    <div className={`flex-col justify-start items-center gap-2 ${className}`}>
      <label className=" text-[#3c3c43]/60 text-xs font-medium uppercase leading-[13px] tracking-tight">
        {label}
      </label>
      <div className="relative">
      {prefixEl && <div className="absolute h-8 w-8 left-4 top-1/2 -translate-y-1/2 text-[#545458] pointer-events-none">
        {prefixEl}
        </div>}
        <input
          type="text"
          className={`${prefixEl ? 'pl-[56px]' : ''} p-4 pr-[52px] bg-zinc-100 rounded-2xl text-[#101112] text-base font-medium leading-[32px] border-none w-full`}
          {...rest}
        />
        <ChevronIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#545458] pointer-events-none" />
      </div>
    </div>
  );
};
