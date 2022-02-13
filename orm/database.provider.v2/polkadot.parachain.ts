import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_polkadot = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4PolkadotParaChain,
        entities: [
          join(__dirname, '../..', 'entity', 'PolkParaChainModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
