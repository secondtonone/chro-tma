import type { TransferRule } from '@/entities/x';

export const transferRules: TransferRule = {
  send_country: {
    id: '2beb5e3b-3e1b-4707-8853-881ade35eafe',
    name: 'Россия',
    abbreviation: 'RUS',
    local_currency: {
      id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
      name: 'Рубль',
      symbol: '₽',
      abbreviation: 'RUB',
    },
  },
  receive_country: {
    id: 'a1118589-cbd6-48d8-8e88-7d81eecf0490',
    name: 'США',
    abbreviation: 'USA',
    local_currency: {
      id: 'cedc2ddc-91e3-4ec5-a78a-bffcd5ddf487',
      name: 'Доллар',
      symbol: '$',
      abbreviation: 'USD',
    },
  },
  original_currency: {
    id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
    name: 'Рубль',
    symbol: '₽',
    abbreviation: 'RUB',
  },
  rules: [
    {
      id: 'b4a54919-3a74-4666-ab83-8cd672f4e1e1',
      provider: {
        id: '1fd57473-4192-4a29-9390-e9cb66c6dd96',
        name: 'Korona',
        url: 'https://korona.com',
        logo: 'pic.png',
      },
      transfer_method: 'перевод',
      min_transfer_time: {
        days: 0,
        hours: 1,
        minutes: 25,
      },
      max_transfer_time: {
        days: 0,
        hours: 2,
        minutes: 25,
      },
      required_documents: [
        {
          id: '8e420095-76bd-4471-b50d-7c01c7894f99',
          name: 'Passport',
        },
      ],
      original_amount: 4000.0,
      converted_amount: 4000.0,
      transfer_currency: {
        id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
        name: 'Рубль',
        symbol: '₽',
        abbreviation: 'RUB',
      },
      amount_received: 3600.0,
      transfer_fee: 400.0,
      transfer_fee_percentage: 10.0,
      min_transfer_amount: 1000.0,
      max_transfer_amount: 10000.0,
      exchange_rate: 1.0,
      conversion_path: ['RUB'],
    },
    {
      id: 'b4a54919-3a74-4666-ab83-8cd672f4e1e1',
      provider: {
        id: '1fd57473-4192-4a29-9390-e9cb66c6dd96',
        name: 'Korona',
        url: 'https://korona.com',
        logo: 'pic.png',
      },
      transfer_method: 'перевод',
      min_transfer_time: {
        days: 0,
        hours: 1,
        minutes: 25,
      },
      max_transfer_time: {
        days: 0,
        hours: 2,
        minutes: 25,
      },
      required_documents: [
        {
          id: '8e420095-76bd-4471-b50d-7c01c7894f99',
          name: 'Passport',
        },
      ],
      original_amount: 4000.0,
      converted_amount: 4000.0,
      transfer_currency: {
        id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
        name: 'Рубль',
        symbol: '₽',
        abbreviation: 'RUB',
      },
      amount_received: 3600.0,
      transfer_fee: 400.0,
      transfer_fee_percentage: 10.0,
      min_transfer_amount: 1000.0,
      max_transfer_amount: 10000.0,
      exchange_rate: 1.0,
      conversion_path: ['RUB'],
    },
    {
      id: 'b4a54919-3a74-4666-ab83-8cd672f4e1e1',
      provider: {
        id: '1fd57473-4192-4a29-9390-e9cb66c6dd96',
        name: 'Korona',
        url: 'https://korona.com',
        logo: 'pic.png',
      },
      transfer_method: 'перевод',
      min_transfer_time: {
        days: 0,
        hours: 1,
        minutes: 25,
      },
      max_transfer_time: {
        days: 0,
        hours: 2,
        minutes: 25,
      },
      required_documents: [
        {
          id: '8e420095-76bd-4471-b50d-7c01c7894f99',
          name: 'Passport',
        },
      ],
      original_amount: 4000.0,
      converted_amount: 4000.0,
      transfer_currency: {
        id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
        name: 'Рубль',
        symbol: '₽',
        abbreviation: 'RUB',
      },
      amount_received: 3600.0,
      transfer_fee: 400.0,
      transfer_fee_percentage: 10.0,
      min_transfer_amount: 1000.0,
      max_transfer_amount: 10000.0,
      exchange_rate: 1.0,
      conversion_path: ['RUB'],
    },
    {
      id: 'b4a54919-3a74-4666-ab83-8cd672f4e1e1',
      provider: {
        id: '1fd57473-4192-4a29-9390-e9cb66c6dd96',
        name: 'Korona',
        url: 'https://korona.com',
        logo: 'pic.png',
      },
      transfer_method: 'перевод',
      min_transfer_time: {
        days: 0,
        hours: 1,
        minutes: 25,
      },
      max_transfer_time: {
        days: 0,
        hours: 2,
        minutes: 25,
      },
      required_documents: [
        {
          id: '8e420095-76bd-4471-b50d-7c01c7894f99',
          name: 'Passport',
        },
      ],
      original_amount: 4000.0,
      converted_amount: 4000.0,
      transfer_currency: {
        id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
        name: 'Рубль',
        symbol: '₽',
        abbreviation: 'RUB',
      },
      amount_received: 3600.0,
      transfer_fee: 400.0,
      transfer_fee_percentage: 10.0,
      min_transfer_amount: 1000.0,
      max_transfer_amount: 10000.0,
      exchange_rate: 1.0,
      conversion_path: ['RUB'],
    },
    {
      id: 'b4a54919-3a74-4666-ab83-8cd672f4e1e1',
      provider: {
        id: '1fd57473-4192-4a29-9390-e9cb66c6dd96',
        name: 'Korona',
        url: 'https://korona.com',
        logo: 'korona.png',
      },
      transfer_method: 'перевод',
      min_transfer_time: {
        days: 0,
        hours: 1,
        minutes: 25,
      },
      max_transfer_time: {
        days: 0,
        hours: 2,
        minutes: 25,
      },
      required_documents: [
        {
          id: '8e420095-76bd-4471-b50d-7c01c7894f99',
          name: 'Passport',
        },
      ],
      original_amount: 4000.0,
      converted_amount: 4000.0,
      transfer_currency: {
        id: 'f6ae4afb-ef39-4123-957a-b3162812913a',
        name: 'Рубль',
        symbol: '₽',
        abbreviation: 'RUB',
      },
      amount_received: 3600.0,
      transfer_fee: 400.0,
      transfer_fee_percentage: 10.0,
      min_transfer_amount: 1000.0,
      max_transfer_amount: 10000.0,
      exchange_rate: 1.0,
      conversion_path: ['RUB'],
    },
  ],
};
