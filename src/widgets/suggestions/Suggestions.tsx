import { SuggestionCard } from '@/shared';

export default function Suggestions() {
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <div className="fixed top-0 z-50 flex w-full flex-col items-center justify-center gap-2 bg-white py-6 text-center text-[28px] font-semibold leading-tight text-[#101112] shadow-2xl shadow-white">
        <div>Вам подходит</div>
        <div className="w-[300px] text-center text-xs font-medium leading-[13px] text-[#3c3c43]/60">
          Актуальные условия уточняйте на сайте поставщика услуги
        </div>
      </div>
      <div className="mt-[118px] flex h-auto flex-col gap-2 px-4 py-3">
        <SuggestionCard
          title="Золотая Корона"
          description="Наличными (потребуются документы)"
          period="Срок зачисления 3 месяца"
          total="5 000 RUB"
          img="./icons/korona.png"
          onClick={() => (location.href = 'https://google.com')}
        />
      </div>
    </div>
  );
}
