import { RedisModuleOptions } from 'nestjs-redis';
import { TaskType } from './../task/enum/TaskType';

export class AppConfig {
  public static typeOrmOption = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ido-dev',
    synchronize: false,
    logging: false,
  };

  public static typeOrmOption4PolkadotParaChain = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ido-polkadot',
    synchronize: false,
    logging: false,
  };
  public static typeOrmOption4KusamaParaChain = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ido-dev',
    synchronize: false,
    logging: false,
  };

  public static typeOrmOption4CDPDB = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ido-price',
    synchronize: false,
    logging: false,
  };

  public static typeOrmOption4MoonRiverDB = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ido-moonriver',
    synchronize: true,
    logging: false,
  };
  public static typeOrmOption4RMRKDB = {
    type: 'postgres',
    host: '',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'dev-rmrk',
    synchronize: false,
    logging: false,
  };
  public static typeOrmOption4PolkadotBalanceDB = {
    type: 'postgres',
    host: '',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'dev-polkadot',
    synchronize: false,
    logging: false,
  };
	public static typeOrmOption4PIS = {
	    type: 'postgres',
	    host: '',
	    port: 5432,
	    username: 'postgres',
	    password: '',
	    database: 'dev-pis',
	    synchronize: false,
	    logging: false,
  };
  public static typeOrmOption4MoonbeamBalanceDB = {
    type: 'postgres',
    host: '',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'dev-moonbeam-balance',
    synchronize: false,
    logging: false,
};

  public static redisOption: RedisModuleOptions = {
    port: 6379,
    host: '',
    password: '',
    db: 0,
  };

  public static taskServerOption = {
    reportResultEndPoint: 'http://localhost:10001/task/task/reportResult',
    reportStatusEndPoint: 'http://localhost:10001/task/task/reportStatus',
  };

  public static scheduleOption = {
    walletAddressRefreshIntervalCron: {
      cron: '0 0 */3 * * *',
      enable: false,
    },
    balanceTransactionsRefreshIntervalCron: {
      cron: '0 0 */3 * * *',
      enable: false,
    },
    kusama_polkParaChainRefreshIntervalCron: {
      cron: '0 */2 * * * *',
      enable: false,
    },
    polkadot_polkParaChainRefreshIntervalCron: {
      cron: '0 */2 * * * *',
      enable: true,
    },
    polkadot_polkParaChainCrowdloanContributionOnParallelProxyDetailRefreshIntervalCron:
      {
        cron: '0 */2 * * * *',
        enable: false,
      },
    polkadot_polkParaChainCrowdloanContributionOnBifrostProxyDetailRefreshIntervalCron:
      {
        cron: '0 */2 * * * *',
        enable: false,
      },

    karuraCDPRefreshIntervalCron: {
      cron: '0 0 */2 * * *',
      enable: false,
    },
  };

  public static queueOption = {
    uiEnable: true,
    basePath: '/admin/queues',
    removeOnComplete: 9999,
    queueMap: {},
  };
  public static queue_address_activities_analysis: string =
    'address_activities_analysis';

  public static queue_chain_wallet_address_refresh: string =
    'chain_wallet_address_refresh';

  public static queue_polk_para_chains_crowdloan_query: string =
    'polk_para_chains_crowdloan_query';

  public static queue_polk_para_chains_crowdloan_contribution_query: string =
    'polk_para_chains_crowdloan_contribution_query';

  public static queue_polk_para_chains_crowdloan_contribution_proxy_detail_query: string =
    'polk_para_chains_crowdloan_contribution_proxy_detail_query';

  public static queue_karura_CDP_refresh: string = 'karura_CDP_refresh';

  public static queue_address_activities_analysis_concurrency: number = 5;
  public static queue_chain_wallet_address_refresh_concurrency: number = 5;
  public static queue_polk_para_chains_crowdloan_query_concurrency: number = 1;
  public static queue_polk_para_chains_crowdloan_contribution_query_concurrency: number = 3;
  public static queue_polk_para_chains_crowdloan_contribution_proxy_detail_query_concurrency: number = 1;

  public static queue_karura_CDP_refresh_concurrency: number = 1;

  public static initilize() {
    AppConfig.queueOption.queueMap = {};

    AppConfig.queueOption.queueMap[TaskType.address_activities_analysis] =
      AppConfig.queue_address_activities_analysis;

    AppConfig.queueOption.queueMap[TaskType.chain_wallet_address_refresh] =
      AppConfig.queue_chain_wallet_address_refresh;

    AppConfig.queueOption.queueMap[TaskType.polk_para_chains_crowdloan_query] =
      AppConfig.queue_polk_para_chains_crowdloan_query;

    AppConfig.queueOption.queueMap[
      TaskType.polk_para_chains_crowdloan_contribution_query
    ] = AppConfig.queue_polk_para_chains_crowdloan_contribution_query;

    AppConfig.queueOption.queueMap[
      TaskType.polk_para_chains_crowdloan_contribution_proxy_detail_query
    ] =
      AppConfig.queue_polk_para_chains_crowdloan_contribution_proxy_detail_query;

    AppConfig.queueOption.queueMap[TaskType.karura_CDP_refresh] =
      AppConfig.queue_karura_CDP_refresh;

    console.log(AppConfig);
  }

  public static START_TIMESTAMP: number = 1230739200;

  public static kusamaCrowdloanDataSourceApiUrl: string =
    'https://api.subquery.network/sq/subvis-io/kusama-auction';
  public static polkadotCrowdloanDataSourceApiUrl: string =
    'https://api.subquery.network/sq/bianyunjian/polkadot-crowdloans';
  public static polkadotCrowdloanParallelIndexerUrl: string =
    'https://api.subquery.network/sq/parallel-finance/auction-subquery';
  public static polkadotCrowdloanBifrostIndexerUrl: string =
    'https://bifrost-service.bifrost.finance/polkadot-subql';

  public static karuraCDPDataSourceApiUrl: string =
    'https://api.subquery.network/sq/AcalaNetwork/karura';

  //public static moonRiverDataSourceApiUrl: string = 'https://api.subquery.network/sq/Moehringen/moonriver';
  public static moonRiverDataSourceApiUrl: string =
    'https://api.subquery.network/sq/bianyunjian/moonriver-staking-indexer';

  public static erc20DataSourceApiUrl: string =
    'https://api.thegraph.com/subgraphs/name/moehringen/erc20indexer';
}
