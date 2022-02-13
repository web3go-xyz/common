import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './../repositoryConsts';
import { AppConfig } from './../../setting/appConfig';


export const databaseProviders_erc20 = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_ERC20,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOptionErc20,
        entities: [
          join(__dirname, '../..', 'entity', 'ERC20Module', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];

