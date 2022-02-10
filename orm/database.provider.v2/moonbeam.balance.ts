import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_moonbeam_balance = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4MoonbeamBalanceDB,
        entities: [
          join(
            __dirname,
            '../..',
            'entity',
            'MoonbeamBalanceModule',
            '*.{js,ts}',
          ),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
