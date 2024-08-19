import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { Button, Input, Select } from '@/shared';
import { RussiaIcon } from '@/shared/ui/RussiaIcon';

export default function Form() {
  const { amount, countryFrom, countryTo, currency } =
    querySelectors.useQuery();
  return (
    <form
      className="bg-white flex flex-col justify-between h-full"
      onSubmit={(e) => {
        e.preventDefault();
        flowEvents.setStage('suggestions');
      }}>
      <div className="w-full p-6 flex-col justify-start items-center gap-10 flex">
        <div className="px-2 flex-col justify-center items-center gap-2 flex">
          <div className="px-5 py-[13px] justify-center items-center inline-flex">
            <div className="text-7xl font-semibold leading-tight tracking-tight">
              💸
            </div>
          </div>

          <div className="text-center text-[#101112] text-[28px] font-semibold leading-tight">
            Подберите лучшие условия перевода
          </div>
        </div>

        <div className="flex-col justify-center items-center gap-4 flex">
          <Select
            prefixEl={<RussiaIcon />}
            label="Я отправляю из"
            value={countryFrom}
            className="w-full"
            readOnly
            onClick={() => flowEvents.setStage('countryFrom')}
          />
          <Select
            prefixEl={<RussiaIcon />}
            label="Страна получателя"
            value={countryTo}
            className="w-full"
            readOnly
            onClick={() => flowEvents.setStage('countryTo')}
          />
          <div className="w-full gap-2 grid grid-cols-12">
            <div className="col-span-8">
              <Input
                label="Сумма перевода"
                value={amount}
                className="w-fit"
                onChange={queryEvents.handleChangeAmount}
                pattern="[+-]?([0-9]*[.])?[0-9]+"
              />
            </div>
            <div className="col-span-4">
              <Select
                label="Валюта"
                value={currency}
                readOnly
                className="w-fit"
                onClick={() => flowEvents.setStage('currency')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit bg-white border-t border-[#3c3c43]/20 backdrop-blur-[180px] px-2 py-4">
        <Button type="submit">Подобрать</Button>
      </div>
    </form>
  );
}
