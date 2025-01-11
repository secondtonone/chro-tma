import config from '@/config';
import { events as flowEvents } from '@/entities/flow';
import { selectors } from '@/entities/query';
import { selectors as rulesSelectors } from '@/entities/transfer-rules';
import { sendUserLog } from '@/entities/user-log';
import {
  filterObject,
  getTimeDescription,
  SuggestionCard,
  useHandleBack,
} from '@/shared';
import { initDataUser, isTMA, openLink } from '@telegram-apps/sdk-react';

export default function Suggestions() {
  const {
    data: { rules },
    error,
  } = rulesSelectors.useTransferRulesQuery();

  const query = selectors.useQuery();

  useHandleBack(() => flowEvents.setStage('form'));

  const initData = initDataUser();
  const userId = initData?.id || '';

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="fixed left-0 right-0 top-0 z-50 flex w-full flex-col items-center justify-center gap-2 bg-white py-6 text-center text-[28px] font-semibold leading-tight text-[#101112] shadow-sm shadow-white dark:bg-black dark:text-white dark:shadow-black">
        <div>Вам подходит</div>
        <div className="w-[300px] text-center text-xs font-medium leading-[13px] text-[#3c3c43]/60 dark:text-slate-300">
          Актуальные условия уточняйте на сайте поставщика услуги
        </div>
      </div>
      {error || rules.length === 0 ? (
        <div className="mt-[118px] flex h-full flex-col items-center justify-center first-line:flex">
          <div className="text-center text-7xl font-semibold leading-tight tracking-tight">
            🔍
          </div>
          <div className="text-center">
            Для указанных стран не найдено <br /> активных правил перевода.
          </div>
        </div>
      ) : null}
      <div className="mt-[118px] flex h-auto flex-col gap-2 px-4 py-3">
        {rules.map(
          ({
            id,
            provider: { name, url, logo },
            conversion_path: [currency],
            original_amount,
            required_documents,
            transfer_fee,
            transfer_method,
            max_transfer_time,
          }) => (
            <SuggestionCard
              key={id}
              title={name}
              description={`${transfer_method} ${required_documents.length > 0 ? '(потребуются документы)' : '(документы не потребуются)'}`}
              period={getTimeDescription(max_transfer_time)}
              total={`${(original_amount || 0) + (transfer_fee || 0)} ${currency}`}
              img={logo ? `${config.apiUrl}${logo}` : ''}
              onClick={async () => {
                await sendUserLog(
                  filterObject(
                    {
                      amount_log: query.optional_amount.toString(),
                      currency_log: query.currency.abbreviation,
                      send_country_log: query.countryFrom.abbreviation,
                      receive_country_log: query.countryTo.abbreviation,
                      tg_user: userId.toString(),
                      url_log: url,
                    },
                    (value) => !(value === '' || value === 0)
                  )
                );

                if (isTMA('simple'))
                {
                  openLink(url, { tryBrowser: 'chrome' });
                } else
                {
                  window.location.href = url;
                }
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
