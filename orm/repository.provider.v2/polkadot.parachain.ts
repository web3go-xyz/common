import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { PolkParaChain } from './../../entity/PolkParaChainModule/polkParaChain.entity';
import { PolkParaChainNameMapping } from './../../entity/PolkParaChainModule/polkParaChainNameMapping.entity';
import { PolkParaChainCrowdloan } from './../../entity/PolkParaChainModule/polkParaChainCrowdloan.entity';
import { PolkParaChainCrowdloanContribution } from './../../entity/PolkParaChainModule/polkParaChainCrowdloanContribution.entity';
import { PolkParaChainCrowdloanRound } from './../../entity/PolkParaChainModule/polkParaChainCrowdloanRound.entity';
import { PolkParaChainCrowdloanContributionProxyDetail } from './../../entity/PolkParaChainModule/polkParaChainCrowdloanContributionProxyDetail.entity';
import { PolkParaChainDatabaseUpdateTask } from './../../entity/PolkParaChainModule/polkParaChainDatabaseUpdateTask.entity';

//polk parachin

//polkadot
export const repositoryProviders_polkadot = [
  {
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChain);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_NAME_MAPPING_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainNameMapping);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_CROWDLOAN_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloan);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide:
      RepositoryConsts.POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloanContribution);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_CROWDLOAN_ROUND_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloanRound);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide:
      RepositoryConsts.POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(
        PolkParaChainCrowdloanContributionProxyDetail,
      );
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide:
      RepositoryConsts.POLKADOT_PARA_CHAIN_DATABASE_UPDATE_TASK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainDatabaseUpdateTask);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
];
