import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { PISAccount } from './../../entity/PolkadotIdentityServiceModule/PISAccount';

//#region polkadot balance
export const repositoryProviders_pis = [
  {
    provide: RepositoryConsts.POLKADOT_IDENTITY_ACCOUNT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PISAccount);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_IDENTITY_SERVICE],
  },
];
//#endregion
