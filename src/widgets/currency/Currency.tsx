import { selectors as currencySelectors } from '@/entities/currency';
import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { List, Title, useHandleBack } from '@/shared';

import { currencies } from './currencies';

export default function Currency() {
  const { data, error } = currencySelectors.useCurrenciesQuery();
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
    icon: currencies.includes(abbreviation) ? (
      <img src={`./icons/${abbreviation.toLowerCase()}.svg`} />
    ) : (
      <div className="flex h-8 w-8 items-center justify-center bg-[#009BE0] text-white">
        ?
      </div>
    ),
  }));

  const { optional_from_currency_id: currency } = querySelectors.useQueryIds();

  useHandleBack(() => flowEvents.setStage('form'));

  return (
    <div className="flex h-full flex-col justify-between">
      <Title>Валюта перевода</Title>
      {error || data.length === 0 ? (
        <div className="mt-[84px] flex h-full flex-col items-center justify-center first-line:flex">
          <div className="text-center text-7xl font-semibold leading-tight tracking-tight">
            💰
          </div>
          <div className="text-center">Нет доступных валют</div>
        </div>
      ) : null}
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
