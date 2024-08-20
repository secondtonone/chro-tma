import { events as flowEvents } from '@/entities/flow';
import { List } from '@/shared';

import { currencies } from './currencies';

export default function Currency() {
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <div className="fixed top-0 z-50 w-full bg-white py-6 text-center text-[28px] font-semibold leading-tight text-[#101112] shadow-2xl shadow-white">
        Валюта перевода
      </div>
      <div className="mt-[84px] h-auto">
        <List
          items={currencies}
          onClick={() => flowEvents.setStage('form')}
          current="usd"
        />
      </div>
    </div>
  );
}
