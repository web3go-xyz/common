import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_moonriver_balance = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4MoonriverBalanceDB,
        entities: [
          join(
            __dirname,
            '../..',
            'entity',
            'MoonriverBalanceModule',
            '*.{js,ts}',
          ),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
