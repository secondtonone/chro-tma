import { selectors as countrySelectors } from '@/entities/country';
import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { List, Title } from '@/shared';
import FlagIcon from '@/shared/ui/FlagIcon';

export default function CountryFrom() {
  const { data } = countrySelectors.useCountriesQuery();
  const items = data.map(({ id, name, abbreviation }) => ({
    id,
    label: name,
    icon: <FlagIcon code={abbreviation} />,
  }));

  const { send_country_id: countryFrom } = querySelectors.useQueryIds();

  return (
    <div className="flex h-full flex-col justify-between">
      <Title>Я отправляю из</Title>
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
