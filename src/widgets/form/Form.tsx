import { gates as countryGates } from '@/entities/country';
import { gates as currencyGates } from '@/entities/currency';
import { events as flowEvents } from '@/entities/flow';
import {
  events as queryEvents,
  selectors as querySelectors,
} from '@/entities/query';
import { selectors as rulesSelectors } from '@/entities/transfer-rules';
import { Button, Input, Select } from '@/shared';
import FlagIcon from '@/shared/ui/FlagIcon';

export default function Form() {
  const {
    optional_amount: amount,
    countryFrom,
    countryTo,
    currency,
  } = querySelectors.useQuery();

  const isPending = rulesSelectors.useTransferPending();

  countryGates.useCountryGate();
  currencyGates.useCurrencyGate();

  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        queryEvents.submitData();
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

          <div className="text-center text-[28px] font-semibold leading-tight text-[#101112] dark:text-white">
            Подберите лучшие условия перевода
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Select
            prefixEl={
              countryFrom.abbreviation ? (
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <FlagIcon code={countryFrom.abbreviation} />
                </div>
              ) : null
            }
            label="Я отправляю из"
            value={countryFrom.name}
            className="w-full"
            placeholder="Выберите страну"
            readOnly
            onClick={() => flowEvents.setStage('countryFrom')}
          />
          <Select
            prefixEl={
              countryTo.abbreviation ? (
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <FlagIcon code={countryTo.abbreviation} />
                </div>
              ) : null
            }
            label="Страна получателя"
            value={countryTo.name}
            className="w-full"
            placeholder="Выберите страну"
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
                pattern="^[0-9.\s]*$"
              />
            </div>
            <div className="col-span-4">
              <Select
                label="Валюта"
                value={currency.abbreviation}
                readOnly
                className="w-fit"
                placeholder="Любая"
                onClick={() => flowEvents.setStage('currency')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit w-full border-t border-[#3c3c43]/20 bg-white px-2 py-4 backdrop-blur-[180px] dark:border-white/20 dark:bg-black">
        <Button type="submit" disabled={isPending}>
          Подобрать
        </Button>
      </div>
    </form>
  );
}
