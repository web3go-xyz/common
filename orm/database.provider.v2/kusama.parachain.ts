import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_kusama = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4KusamaParaChain,
        entities: [
          join(__dirname, '../..', 'entity', 'PolkParaChainModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CommonModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
