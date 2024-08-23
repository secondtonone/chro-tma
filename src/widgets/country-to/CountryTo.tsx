import { selectors as countrySelectors } from '@/entities/country';
import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { List, Title } from '@/shared';
import FlagIcon from '@/shared/ui/FlagIcon';

export default function CountryTo() {
  const { data } = countrySelectors.useCountriesQuery();
  const items = data.map(({ id, name, abbreviation }) => ({
    id,
    label: name,
    icon: <FlagIcon code={abbreviation} />,
  }));

  const { receive_country_id: countryTo } = querySelectors.useQueryIds();

  return (
    <div className="flex h-full flex-col justify-between">
      <Title>Страна получателя</Title>
      <div className="mt-[84px] h-auto">
        <List
          items={items}
          onClick={(id) => {
            flowEvents.setStage('form');
            queryEvents.changeCountryTo(id);
          }}
          current={countryTo}
        />
      </div>
    </div>
  );
}
