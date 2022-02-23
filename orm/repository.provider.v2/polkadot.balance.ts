import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { Accounts } from './../../entity/PolkadotBalanceModule/Accounts';
import { AccountSnapshots } from './../../entity/PolkadotBalanceModule/AccountSnapshots';
import { BalanceSets } from './../../entity/PolkadotBalanceModule/BalanceSets';
import { Deposits } from './../../entity/PolkadotBalanceModule/Deposits';
import { Endoweds } from './../../entity/PolkadotBalanceModule/Endoweds';
import { Reserveds } from './../../entity/PolkadotBalanceModule/Reserveds';
import { ReservRepatriateds } from './../../entity/PolkadotBalanceModule/ReservRepatriateds';
import { Slashes } from './../../entity/PolkadotBalanceModule/Slashes';
import { Transfers } from './../../entity/PolkadotBalanceModule/Transfers';
import { Unreserveds } from './../../entity/PolkadotBalanceModule/Unreserveds';
import { Withdraws } from './../../entity/PolkadotBalanceModule/Withdraws';
import { AccountsLatestSyncBlock } from './../../entity/PolkadotBalanceModule/AccountsLatestSyncBlock';

//#region polkadot balance
export const repositoryProviders_polkadot_balance = [
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_ACCOUNT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Accounts);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountSnapshots);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_BALANCE_SETS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(BalanceSets);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_DEPOSITS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Deposits);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_ENDOWEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Endoweds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_RESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Reserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
  {
    provide: RepositoryConsts.POLKADOT_BALANCE_RESERVREPATRIATEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ReservRepatriateds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },

  {
    provide: RepositoryConsts.POLKADOT_BALANCE_SLASH_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Slashes);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },

  {
    provide: RepositoryConsts.POLKADOT_BALANCE_TRANSFERS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Transfers);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },

  {
    provide: RepositoryConsts.POLKADOT_BALANCE_UNRESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Unreserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },

  {
    provide: RepositoryConsts.POLKADOT_BALANCE_WITHDRAWS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Withdraws);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },

  {
    provide: RepositoryConsts.POLKADOT_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountsLatestSyncBlock);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_BALANCE],
  },
];
//#endregion
