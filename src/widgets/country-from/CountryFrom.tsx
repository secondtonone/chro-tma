import { selectors as countrySelectors } from '@/entities/country';
import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { List, Title, useHandleBack } from '@/shared';
import FlagIcon from '@/shared/ui/FlagIcon';

export default function CountryFrom() {
  const { data, error } = countrySelectors.useCountriesQuery();
  const items = data.map(({ id, name, abbreviation }) => ({
    id,
    label: name,
    icon: <FlagIcon code={abbreviation} />,
  }));

  const { send_country_id: countryFrom } = querySelectors.useQueryIds();

  useHandleBack(() => flowEvents.setStage('form'));

  return (
    <div className="flex h-full flex-col justify-between">
      <Title>Я отправляю из</Title>
      {error || data.length === 0 ? (
        <div className="mt-[84px] flex h-full flex-col items-center justify-center first-line:flex">
          <div className="text-center text-7xl font-semibold leading-tight tracking-tight">
            🌎
          </div>
          <div className="text-center">Нет доступных стран</div>
        </div>
      ) : null}
      <div className="mt-[84px] h-auto">
        <List
          items={items}
          onClick={(id) => {
            queryEvents.changeCountryFrom(id);
            flowEvents.setStage('form');
          }}
          current={countryFrom}
        />
      </div>
    </div>
  );
}
