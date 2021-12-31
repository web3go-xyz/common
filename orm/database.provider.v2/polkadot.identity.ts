import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_pis = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_POLKADOT_IDENTITY_SERVICE,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4PIS,
        entities: [
          join(
            __dirname,
            '../..',
            'entity',
            'PolkadotIdentityServiceModule',
            '*.{js,ts}',
          ),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
