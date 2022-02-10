import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { Accounts } from './../../entity/MoonbeamBalanceModule/Accounts';
import { AccountSnapshots } from './../../entity/MoonbeamBalanceModule/AccountSnapshots';
import { BalanceSets } from './../../entity/MoonbeamBalanceModule/BalanceSets';
import { Deposits } from './../../entity/MoonbeamBalanceModule/Deposits';
import { Endoweds } from './../../entity/MoonbeamBalanceModule/Endoweds';
import { Reserveds } from './../../entity/MoonbeamBalanceModule/Reserveds';
import { ReservRepatriateds } from './../../entity/MoonbeamBalanceModule/ReservRepatriateds';
import { Slashes } from './../../entity/MoonbeamBalanceModule/Slashes';
import { Transfers } from './../../entity/MoonbeamBalanceModule/Transfers';
import { Unreserveds } from './../../entity/MoonbeamBalanceModule/Unreserveds';
import { Withdraws } from './../../entity/MoonbeamBalanceModule/Withdraws';
import { AccountsLatestSyncBlock } from './../../entity/MoonbeamBalanceModule/AccountLatestSyncBlock';

//#region moonbeam balance
export const repositoryProviders_moonbeam_balance = [
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_ACCOUNT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Accounts);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountSnapshots);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_BALANCE_SETS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(BalanceSets);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_DEPOSITS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Deposits);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_ENDOWEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Endoweds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_RESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Reserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_RESERVREPATRIATEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ReservRepatriateds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_SLASH_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Slashes);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_TRANSFERS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Transfers);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_UNRESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Unreserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_WITHDRAWS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Withdraws);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },

  {
    provide: RepositoryConsts.MOONBEAM_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountsLatestSyncBlock);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONBEAM_BALANCE],
  },
];
//#endregion
