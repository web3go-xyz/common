import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { Accounts } from './../../entity/KusamaBalanceModule/Accounts';
import { BalanceSets } from './../../entity/KusamaBalanceModule/BalanceSets';
import { Deposits } from './../../entity/KusamaBalanceModule/Deposits';
import { Endoweds } from './../../entity/KusamaBalanceModule/Endoweds';
import { Reserveds } from './../../entity/KusamaBalanceModule/Reserveds';
import { ReservRepatriateds } from './../../entity/KusamaBalanceModule/ReservRepatriateds';
import { Slashes } from './../../entity/KusamaBalanceModule/Slashes';
import { Transfers } from './../../entity/KusamaBalanceModule/Transfers';
import { Unreserveds } from './../../entity/KusamaBalanceModule/Unreserveds';
import { Withdraws } from './../../entity/KusamaBalanceModule/Withdraws';
import { AccountsLatestSyncBlock } from './../../entity/KusamaBalanceModule/AccountsLatestSyncBlock';

//#region kusama balance
export const repositoryProviders_kusama_balance = [
  {
    provide: RepositoryConsts.KUSAMA_BALANCE_ACCOUNT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Accounts);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },

  {
    provide: RepositoryConsts.KUSAMA_BALANCE_BALANCE_SETS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(BalanceSets);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },
  {
    provide: RepositoryConsts.KUSAMA_BALANCE_DEPOSITS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Deposits);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },
  {
    provide: RepositoryConsts.KUSAMA_BALANCE_ENDOWEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Endoweds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },
  {
    provide: RepositoryConsts.KUSAMA_BALANCE_RESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Reserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },
  {
    provide: RepositoryConsts.KUSAMA_BALANCE_RESERVREPATRIATEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ReservRepatriateds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },

  {
    provide: RepositoryConsts.KUSAMA_BALANCE_SLASH_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Slashes);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },

  {
    provide: RepositoryConsts.KUSAMA_BALANCE_TRANSFERS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Transfers);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },

  {
    provide: RepositoryConsts.KUSAMA_BALANCE_UNRESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Unreserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },

  {
    provide: RepositoryConsts.KUSAMA_BALANCE_WITHDRAWS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Withdraws);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },

  {
    provide: RepositoryConsts.KUSAMA_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountsLatestSyncBlock);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_BALANCE],
  },
];
//#endregion
