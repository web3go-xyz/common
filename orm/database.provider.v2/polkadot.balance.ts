import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_polkadot_balance = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4PolkadotBalanceDB,
        entities: [
          join(__dirname, '../..', 'entity', 'PolkadotBalanceModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
