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
      className="flex h-full flex-col justify-between bg-white"
      onSubmit={(e) => {
        e.preventDefault();
        flowEvents.setStage('suggestions');
      }}
    >
      <div className="flex w-full flex-col items-center justify-start gap-10 p-6">
        <div className="flex flex-col items-center justify-center gap-2 px-2">
          <div className="inline-flex items-center justify-center px-5 py-[13px]">
            <div className="text-7xl font-semibold leading-tight tracking-tight">
              💸
            </div>
          </div>

          <div className="text-center text-[28px] font-semibold leading-tight text-[#101112]">
            Подберите лучшие условия перевода
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Select
            prefixEl={<RussiaIcon />}
            label="Я отправляю из"
            value={countryFrom}
            className="w-full"
            readOnly
            onClick={() => flowEvents.setStage('countryFrom')}
          />
          <Select
            label="Страна получателя"
            value={countryTo}
            className="w-full"
            readOnly
            onClick={() => flowEvents.setStage('countryTo')}
          />
          <div className="grid w-full grid-cols-12 gap-2">
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

      <div className="h-fit w-full border-t border-[#3c3c43]/20 bg-white px-2 py-4 backdrop-blur-[180px]">
        <Button type="submit">Подобрать</Button>
      </div>
    </form>
  );
}
