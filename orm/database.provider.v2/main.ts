import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_main = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption,
        entities: [
          join(__dirname, '../..', 'entity', 'UserManagementModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'ERC20Module', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CommonModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'PolkParaChainModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CustomQueryModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
