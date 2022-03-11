import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_kusama_balance = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4KusamaBalanceDB,
        entities: [
          join(__dirname, '../..', 'entity', 'KusamaBalanceModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
