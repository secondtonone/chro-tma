export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; 
  className?: string; 
}

export const Input: React.FC<IInputProps> = ({
  label,
  className = '',
  ...rest
}) =>{
  return (
    <div className={`flex-col justify-start items-center gap-2 ${className}`}>
      <label className=" text-[#3c3c43]/60 text-xs font-medium uppercase leading-[13px] tracking-tight">
        {label}
      </label>
      <input
        type="text"
        className="p-4 bg-zinc-100 rounded-2xl text-[#101112] text-base font-medium leading-[32px] border-none w-full"
        {...rest}
      />
    </div>
  );
};
