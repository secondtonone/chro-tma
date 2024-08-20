interface ISuggestionCardProps {
  title: string;
  description: string;
  onClick: () => void;
  period: string;
  total: string;
  img: string;
}

export function SuggestionCard({
  title,
  description,
  period,
  total,
  img,
  onClick,
}: ISuggestionCardProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-3 rounded-2xl bg-zinc-100 p-4">
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-3xl bg-[#e0dfe2]">
          <img className="h-8 w-8" src={img} />
        </div>

        <div className="flex flex-col items-start justify-center gap-0.5">
          <div className="text-sm font-medium leading-[18px] text-[#101112]">
            {title}
          </div>
          <div className="text-xs font-medium leading-[13px] text-[#3c3c43]/60">
            {description}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-between pt-2">
        <div className="flex-col items-start justify-center gap-0.5">
          <div className="text-xs font-medium leading-[13px] text-[#3c3c43]/60">
            Срок зачисления
          </div>
          <div className="text-sm font-medium leading-[18px] text-[#101112]">
            {period}
          </div>
        </div>

        <div className="flex flex-col items-end justify-center gap-0.5 pr-[5px]">
          <div className="text-right text-xs font-medium leading-[13px] text-[#3c3c43]/60">
            К оплате
          </div>
          <div className="text-right text-sm font-medium leading-[18px] text-[#009be0]">
            {total}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-[#009be0] px-6 py-2 text-center text-sm font-semibold leading-[17.92px] text-white"
        onClick={onClick}
      >
        Перейти
      </button>
    </div>
  );
}
