import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_cdp = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_CDP,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4CDPDB,
        entities: [
          join(__dirname, '../..', 'entity', 'CDPModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CommonModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
