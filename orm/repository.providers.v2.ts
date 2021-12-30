import { ChainType } from './../entity/ERC20Module/chainType.entity';
import { WalletAddress } from './../entity/ERC20Module/walletAddress.entity';
import { WalletAddressInfo } from './../entity/ERC20Module/walletAddressInfo.entity';
import { WalletAddressTransaction } from './../entity/ERC20Module/walletAddressTransaction.entity';
import { Connection } from 'typeorm';
import { RepositoryConsts } from './repositoryConsts';
import { ChainTypeExt } from './../entity/ERC20Module/chainTypeExt.entity';
import { WalletAddressExt } from './../entity/ERC20Module/walletAddressExt.entity';
import { PolkParaChain } from '../entity/PolkParaChainModule/polkParaChain.entity';
import { PolkParaChainNameMapping } from './../entity/PolkParaChainModule/polkParaChainNameMapping.entity';
import { PolkParaChainCrowdloan } from './../entity/PolkParaChainModule/polkParaChainCrowdloan.entity';
import { PolkParaChainCrowdloanContribution } from './../entity/PolkParaChainModule/polkParaChainCrowdloanContribution.entity';
import { LabelMarkConfig } from './../entity/ERC20Module/labelMarkConfig.entity';
import { PriceFetchTask } from './../entity/CDPModule/priceFetchTask.entity';
import { ChainState } from './../entity/CDPModule/chainState.entity';
import { Price } from './../entity/CDPModule/price.entity';
import { ChainStatistic } from './../entity/CDPModule/chainStatistic.entity';
import { LoanPosition } from './../entity/CDPModule/loanPosition.entity';
import { LoanAction } from './../entity/CDPModule/loanAction.entity';
import { CustomQuery } from './../entity/CustomQueryModule/customQuery.entity';
import { MoonRiverChainState } from './../entity/MoonRiverModule/MoonRiverChainState.entity';
import { CollatorActionHistory } from './../entity/MoonRiverModule/CollatorActionHistory.entity';
import { NominatorActionHistory } from './../entity/MoonRiverModule/NominatorActionHistory.entity';
import { RewardHistory } from './../entity/MoonRiverModule/RewardHistory.entity';
import { RoundCollator } from './../entity/MoonRiverModule/RoundCollator.entity';
import { RoundInfo } from './../entity/MoonRiverModule/RoundInfo.entity';
import { CollatorNumberHistory } from './../entity/MoonRiverModule/CollatorNumberHistory.entity';
import { CollatorPointHistory } from './../entity/MoonRiverModule/CollatorPointHistory.entity';
import { User } from './../entity/UserManagementModule/User.entity';
import { UserVerifyCode } from './../entity/UserManagementModule/UserVerifyCode.entity';
import { UserFavorite } from './../entity/UserManagementModule/UserFavorite.entity';
import { PolkParaChainCrowdloanRound } from './../entity/PolkParaChainModule/polkParaChainCrowdloanRound.entity';
import { AddressTag } from './../entity/CommonModule/addressTag.entity';
import { PolkParaChainCrowdloanContributionProxyDetail } from './../entity/PolkParaChainModule/polkParaChainCrowdloanContributionProxyDetail.entity';
import { PolkParaChainDatabaseUpdateTask } from './../entity/PolkParaChainModule/polkParaChainDatabaseUpdateTask.entity';
import { PlatformStatistic } from './../entity/CommonModule/PlatformStatistic.entity';
import { CollectionEntities } from './../entity/RMRKModule/CollectionEntities';
import { NFTEntities } from './../entity/RMRKModule/NFTEntities';
import { RemarkEntities } from './../entity/RMRKModule/RemarkEntities';
import { EventEntities } from './../entity/RMRKModule/EventEntities';
import { NominatorRewardDetailHistory } from './../entity/MoonRiverModule/NominatorRewardDetailHistory.entity';
import { CollectionStatisticEntities } from './../entity/RMRKModule/CollectionStatisticEntities';
import { MonitorSubscribe } from './../entity/MoonRiverModule/MonitorSubscribe.entity';


export const repositoryProviders_erc20 = [
  {
    provide: RepositoryConsts.CHAINTYPE_REPOSITORY,
    useFactory: (connection: Connection) => {

      return connection.getRepository(ChainType);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  },
  {
    provide: RepositoryConsts.WALLET_ADDRESS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(WalletAddress);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  },

  {
    provide: RepositoryConsts.WALLET_ADDRESS_INFO_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(WalletAddressInfo);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  },

  {
    provide: RepositoryConsts.WALLET_ADDRESS_TRANSACTION_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(WalletAddressTransaction);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  },

  {
    provide: RepositoryConsts.ADDRESS_TAG_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AddressTag);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },

  {
    provide: RepositoryConsts.CHAINTYPE_EXT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ChainTypeExt);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  },

  {
    provide: RepositoryConsts.WALLET_ADDRESS_EXT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(WalletAddressExt);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  },
  {
    provide: RepositoryConsts.LABEL_MARK_CONFIG_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(LabelMarkConfig);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_ERC20],
  }];

//polk parachin

//kusama

export const repositoryProviders_kusama = [
  {
    provide: RepositoryConsts.KUSAMA_PARA_CHAIN_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChain);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN],
  },
  {
    provide: RepositoryConsts.KUSAMA_PARA_CHAIN_NAME_MAPPING_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainNameMapping);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN],
  },
  {
    provide: RepositoryConsts.KUSAMA_PARA_CHAIN_CROWDLOAN_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloan);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN],
  },
  {
    provide: RepositoryConsts.KUSAMA_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloanContribution);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN],
  },
  {
    provide: RepositoryConsts.KUSAMA_PARA_CHAIN_CROWDLOAN_ROUND_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloanRound);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN],
  }];


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
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY,
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
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainCrowdloanContributionProxyDetail);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
  {
    provide: RepositoryConsts.POLKADOT_PARA_CHAIN_DATABASE_UPDATE_TASK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PolkParaChainDatabaseUpdateTask);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN],
  },
];

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
    provide: RepositoryConsts.MOONRIVER_NOMINATOR_REWARD_DETAIL_HISTORY_REPOSITORY,
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


//#region  User Management
export const repositoryProviders_main = [

  {
    provide: RepositoryConsts.ADDRESS_TAG_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AddressTag);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },

  {
    provide: RepositoryConsts.CUSTOM_QUERY_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(CustomQuery);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },
  {
    provide: RepositoryConsts.USER_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(User);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },
  {
    provide: RepositoryConsts.USER_FAVORITE_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(UserFavorite);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },
  {
    provide: RepositoryConsts.USER_VERIFY_CODE_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(UserVerifyCode);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },

  //#endregion


  //#region Platform
  {
    provide: RepositoryConsts.PLATFORM_STATISTIC_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(PlatformStatistic);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION],
  },
  //#endregion
];

//#region RMRK

export const repositoryProviders_rmrk = [
  {
    provide: RepositoryConsts.RMRK_COLLECTION_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(CollectionEntities);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_RMRK],
  },
  {
    provide: RepositoryConsts.RMRK_NFT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(NFTEntities);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_RMRK],
  },
  {
    provide: RepositoryConsts.RMRK_REMARK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(RemarkEntities);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_RMRK],
  },
  {
    provide: RepositoryConsts.RMRK_EVENT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(EventEntities);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_RMRK],
  },
  {
    provide: RepositoryConsts.RMRK_COLLECTION_STATISTIC_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(CollectionStatisticEntities);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_RMRK],
  },
];
//#endregion
