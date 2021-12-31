import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { MoonRiverChainState } from './../../entity/MoonRiverModule/MoonRiverChainState.entity';
import { CollatorActionHistory } from './../../entity/MoonRiverModule/CollatorActionHistory.entity';
import { NominatorActionHistory } from './../../entity/MoonRiverModule/NominatorActionHistory.entity';
import { RewardHistory } from './../../entity/MoonRiverModule/RewardHistory.entity';
import { RoundCollator } from './../../entity/MoonRiverModule/RoundCollator.entity';
import { RoundInfo } from './../../entity/MoonRiverModule/RoundInfo.entity';
import { CollatorNumberHistory } from './../../entity/MoonRiverModule/CollatorNumberHistory.entity';
import { CollatorPointHistory } from './../../entity/MoonRiverModule/CollatorPointHistory.entity';
import { NominatorRewardDetailHistory } from './../../entity/MoonRiverModule/NominatorRewardDetailHistory.entity';
import { MonitorSubscribe } from './../../entity/MoonRiverModule/MonitorSubscribe.entity';

//Moonriver

export const repositoryProviders_moonriver = [
  {
    provide: RepositoryConsts.MOONRIVER_CHAIN_STATE_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(MoonRiverChainState);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },

  {
    provide: RepositoryConsts.MOONRIVER_COLLATOR_ACTION_HISTORY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(CollatorActionHistory);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },
  {
    provide: RepositoryConsts.MOONRIVER_NOMINATOR_ACTION_HISTORY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(NominatorActionHistory);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },
  {
    provide: RepositoryConsts.MOONRIVER_REWARD_HISTORY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(RewardHistory);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },
  {
    provide: RepositoryConsts.MOONRIVER_ROUND_COLLATOR_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(RoundCollator);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },

  {
    provide: RepositoryConsts.MOONRIVER_ROUND_INFO_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(RoundInfo);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },

  {
    provide: RepositoryConsts.MOONRIVER_COLLATOR_NUMBER_HISTORY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(CollatorNumberHistory);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },

  {
    provide: RepositoryConsts.MOONRIVER_POINT_HISTORY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(CollatorPointHistory);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },
  {
    provide:
      RepositoryConsts.MOONRIVER_NOMINATOR_REWARD_DETAIL_HISTORY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(NominatorRewardDetailHistory);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },

  {
    provide: RepositoryConsts.MOONRIVER_MONITOR_SUBSCRIBE_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(MonitorSubscribe);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_MOONRIVER],
  },
];
