
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { Connection } from 'typeorm';
import { PriceFetchTask } from './../../entity/CDPModule/priceFetchTask.entity';
import { ChainState } from './../../entity/CDPModule/chainState.entity';
import { Price } from './../../entity/CDPModule/price.entity';
import { ChainStatistic } from './../../entity/CDPModule/chainStatistic.entity';
import { LoanPosition } from './../../entity/CDPModule/loanPosition.entity';
import { LoanAction } from './../../entity/CDPModule/loanAction.entity';

//Karura CDP
export const repositoryProviders_karura = [
  {
    provide: RepositoryConsts.CDP_CHAIN_STATE_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ChainState);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_CDP],
  },
  {
    provide: RepositoryConsts.CDP_PRICE_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Price);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_CDP],
  },
  {
    provide: RepositoryConsts.CDP_PRICE_FETCH_TASK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PriceFetchTask);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_CDP],
  },

  {
    provide: RepositoryConsts.CDP_CHAIN_STATISTIC_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ChainStatistic);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_CDP],
  },
  {
    provide: RepositoryConsts.CDP_LOAN_POSITION_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(LoanPosition);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_CDP],
  },
  {
    provide: RepositoryConsts.CDP_LOAN_ACTION_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(LoanAction);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_CDP],
  },
];
