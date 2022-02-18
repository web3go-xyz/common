import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { Accounts } from './../../entity/MoonriverBalanceModule/Accounts';
import { AccountSnapshots } from './../../entity/MoonriverBalanceModule/AccountSnapshots';
import { BalanceSets } from './../../entity/MoonriverBalanceModule/BalanceSets';
import { Deposits } from './../../entity/MoonriverBalanceModule/Deposits';
import { Endoweds } from './../../entity/MoonriverBalanceModule/Endoweds';
import { Reserveds } from './../../entity/MoonriverBalanceModule/Reserveds';
import { ReservRepatriateds } from './../../entity/MoonriverBalanceModule/ReservRepatriateds';
import { Slashes } from './../../entity/MoonriverBalanceModule/Slashes';
import { Transfers } from './../../entity/MoonriverBalanceModule/Transfers';
import { Unreserveds } from './../../entity/MoonriverBalanceModule/Unreserveds';
import { Withdraws } from './../../entity/MoonriverBalanceModule/Withdraws';
import { AccountsLatestSyncBlock } from './../../entity/MoonriverBalanceModule/AccountLatestSyncBlock';

//#region moonriver balance
export const repositoryProviders_moonriver_balance = [
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_ACCOUNT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Accounts);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountSnapshots);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_BALANCE_SETS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(BalanceSets);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_DEPOSITS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Deposits);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_ENDOWEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Endoweds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_RESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Reserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_RESERVREPATRIATEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ReservRepatriateds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_SLASH_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Slashes);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_TRANSFERS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Transfers);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_UNRESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Unreserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_WITHDRAWS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Withdraws);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONRIVER_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountsLatestSyncBlock);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER_BALANCE],
  },
];
//#endregion
