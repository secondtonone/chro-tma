import { CheckIcon } from './CheckIcon';

export interface IListProps {
  items: {
    id: string;
    label: React.ReactNode;
    icon: React.ReactNode;
  }[];
  className?: string;
  onClick?: (id: string) => void;
  current?: string;
}

export const List: React.FC<IListProps> = ({
  items,
  className = '',
  onClick,
  current,
}) => {
  return (
    <ul
      className={`flex flex-col items-center justify-start gap-2 px-4 py-3 ${className}`}
    >
      {items.map(({ label, icon, id }) => (
        <li
          key={id}
          className={`${icon ? 'pl-[56px]' : ''} relative w-full cursor-pointer rounded-2xl border-none bg-zinc-100 p-4 text-base font-medium leading-[32px] text-[#101112] hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white`}
          onClick={() => {
            if (typeof onClick === 'function') onClick(id);
          }}
        >
          {icon && (
            <div className="pointer-events-none absolute left-4 top-1/2 h-8 w-8 -translate-y-1/2 overflow-hidden rounded-full">
              {icon}
            </div>
          )}
          <div className="text-[#545458] dark:text-white">{label}</div>
          {current === id ? (
            <CheckIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#009BE0]" />
          ) : null}
        </li>
      ))}
    </ul>
  );
};
