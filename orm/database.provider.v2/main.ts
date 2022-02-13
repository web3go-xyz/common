import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_main = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOptionPlatform,
        entities: [
          join(__dirname, '../..', 'entity', 'UserManagementModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CommonModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CustomQueryModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
