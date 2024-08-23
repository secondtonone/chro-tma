import { selectors as currencySelectors } from '@/entities/currency';
import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { List, Title } from '@/shared';

export default function Currency() {
  const { data } = currencySelectors.useCurrenciesQuery();
  const items = data.map(({ id, name, abbreviation }) => ({
    id,
    label: (
      <div>
        <div className="text-base font-medium leading-[18px] text-[#101112] dark:text-white">
          {name}
        </div>
        <div className="text-xs font-medium uppercase leading-[13px] tracking-tight text-[#3c3c43]/60 dark:text-white/40">
          {abbreviation.toLocaleUpperCase()}
        </div>
      </div>
    ),
    icon: <img src={`./icons/${abbreviation.toLowerCase()}.svg`} />,
  }));

  const { optional_from_currency_id: currency } = querySelectors.useQueryIds();

  return (
    <div className="flex h-full flex-col justify-between">
      <Title>Валюта перевода</Title>
      <div className="mt-[84px] h-auto">
        <List
          items={items}
          onClick={(id) => {
            queryEvents.changeCurrency(id);
            flowEvents.setStage('form');
          }}
          current={currency}
        />
      </div>
    </div>
  );
}
