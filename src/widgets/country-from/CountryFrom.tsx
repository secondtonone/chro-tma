import { events as flowEvents } from '@/entities/flow';
import { List } from '@/shared';
import { RussiaIcon } from '@/shared/ui/RussiaIcon';

const items = [
  {
    id: '1',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '2',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '3',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '4',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '5',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '6',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '7',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '8',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '9',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '10',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '11',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
  {
    id: '12',
    label: 'Россия',
    icon: <RussiaIcon />,
  },
];

export default function CountryFrom() {
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <div className="fixed top-0 z-50 w-full bg-white py-6 text-center text-[28px] font-semibold leading-tight text-[#101112] shadow-2xl shadow-white">
        Я отправляю из
      </div>
      <div className="mt-[84px] h-auto">
        <List
          items={items}
          onClick={() => flowEvents.setStage('form')}
          current="1"
        />
      </div>
    </div>
  );
}
