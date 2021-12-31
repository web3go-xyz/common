import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';

export const databaseProviders_moonriver = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_MOONRIVER,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4MoonRiverDB,
        entities: [
          join(__dirname, '../..', 'entity', 'MoonRiverModule', '*.{js,ts}'),
          join(__dirname, '../..', 'entity', 'CommonModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
