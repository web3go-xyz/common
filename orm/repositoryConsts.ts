export class RepositoryConsts {
  public static DATABASE_CONNECTION: string = 'DATABASE_CONNECTION';
  public static DATABASE_CONNECTION_ERC20: string = 'DATABASE_CONNECTION_ERC20';
  public static DATABASE_CONNECTION_CDP: string = 'DATABASE_CONNECTION_CDP';

  public static DATABASE_CONNECTION_MOONRIVER: string =
    'DATABASE_CONNECTION_MOONRIVER';

  public static DATABASE_CONNECTION_KUSAMA_PARACHAIN: string =
    'DATABASE_CONNECTION_KUSAMA_PARACHAIN';
  public static DATABASE_CONNECTION_POLKADOT_PARACHAIN: string =
    'DATABASE_CONNECTION_POLKADOT_PARACHAIN';

  public static DATABASE_CONNECTION_RMRK: string = 'DATABASE_CONNECTION_RMRK';
  public static DATABASE_CONNECTION_POLKADOT_BALANCE: string =
    'DATABASE_CONNECTION_POLKADOT_BALANCE';

  public static CHAINTYPE_REPOSITORY: string = 'CHAINTYPE_REPOSITORY';

  public static WALLET_ADDRESS_REPOSITORY: string = 'WALLET_ADDRESS_REPOSITORY';

  public static WALLET_ADDRESS_INFO_REPOSITORY: string =
    'WALLET_ADDRESS_INFO_REPOSITORY';

  public static WALLET_ADDRESS_TRANSACTION_REPOSITORY: string =
    'WALLET_ADDRESS_TRANSACTION_REPOSITORY';

  public static ADDRESS_TAG_REPOSITORY: string = 'ADDRESS_TAG_REPOSITORY';

  public static CHAINTYPE_EXT_REPOSITORY: string = 'CHAINTYPE_EXT_REPOSITORY';

  public static WALLET_ADDRESS_EXT_REPOSITORY: string =
    'WALLET_ADDRESS_EXT_REPOSITORY';

  public static KUSAMA_PARA_CHAIN_NAME_MAPPING_REPOSITORY: string =
    'KUSAMA_PARA_CHAIN_NAME_MAPPING';
  public static KUSAMA_PARA_CHAIN_REPOSITORY: string =
    'KUSAMA_PARA_CHAIN_REPOSITORY';
  public static KUSAMA_PARA_CHAIN_CROWDLOAN_REPOSITORY: string =
    'KUSAMA_PARA_CHAIN_CROWDLOAN_REPOSITORY';
  public static KUSAMA_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY: string =
    'KUSAMA_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY';
  public static KUSAMA_PARA_CHAIN_CROWDLOAN_ROUND_REPOSITORY: string =
    'KUSAMA_PARA_CHAIN_CROWDLOAN_ROUND_REPOSITORY';

  public static POLKADOT_PARA_CHAIN_NAME_MAPPING_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_NAME_MAPPING';
  public static POLKADOT_PARA_CHAIN_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_REPOSITORY';
  public static POLKADOT_PARA_CHAIN_CROWDLOAN_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_CROWDLOAN_REPOSITORY';
  public static POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_REPOSITORY';
  public static POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_REPOSITORY';
  public static POLKADOT_PARA_CHAIN_CROWDLOAN_ROUND_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_CROWDLOAN_ROUND_REPOSITORY';
  public static POLKADOT_PARA_CHAIN_DATABASE_UPDATE_TASK_REPOSITORY: string =
    'POLKADOT_PARA_CHAIN_DATABASE_UPDATE_TASK_REPOSITORY';
  public static UPDATE_POLKAPDOT_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_FROM_PARALLEL: string =
    'UPDATE_DB_POLKAPDOT_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_FROM_PARALLEL';
  public static UPDATE_POLKAPDOT_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_FROM_BIFROST: string =
    'UPDATE_DB_POLKAPDOT_CROWDLOAN_CONTRIBUTION_PROXY_DETAIL_FROM_BIFROST';
  public static PARALLEL_PROXY_ACCOUNT: string =
    '13wNbioJt44NKrcQ5ZUrshJqP7TKzQbzZt5nhkeL4joa3PAX';
  public static BIFROST_PROXY_ACCOUNT: string =
    '14AMZ3gw4tRsrdp78i4MmHZ8EFbXTMfuXGQMEC3t1GoqLboH';

  public static LABEL_MARK_CONFIG_REPOSITORY: string =
    'LABEL_MARK_CONFIG_REPOSITORY';

  public static CDP_CHAIN_STATE_REPOSITORY: string =
    'CDP_CHAIN_STATE_REPOSITORY';
  public static CDP_PRICE_REPOSITORY: string = 'CDP_PRICE_REPOSITORY';
  public static CDP_PRICE_FETCH_TASK_REPOSITORY: string =
    'CDP_PRICE_FETCH_TASK_REPOSITORY';

  public static CDP_CHAIN_STATISTIC_REPOSITORY: string =
    'CDP_CHAIN_STATISTIC_REPOSITORY';
  public static CDP_LOAN_POSITION_REPOSITORY: string =
    'CDP_LOAN_POSITION_REPOSITORY';
  public static CDP_LOAN_ACTION_REPOSITORY: string =
    'CDP_LOAN_ACTION_REPOSITORY';

  public static CUSTOM_QUERY_REPOSITORY: string = 'CUSTOM_QUERY_REPOSITORY';

  //MoonRiver
  public static MOONRIVER_CHAIN_STATE_REPOSITORY: string =
    'MOONRIVER_CHAIN_STATE_REPOSITORY';
  public static MOONRIVER_COLLATOR_ACTION_HISTORY_REPOSITORY: string =
    'MOONRIVER_COLLATOR_ACTION_HISTORY_REPOSITORY';
  public static MOONRIVER_NOMINATOR_ACTION_HISTORY_REPOSITORY: string =
    'MOONRIVER_NOMINATOR_ACTION_HISTORY_REPOSITORY';
  public static MOONRIVER_REWARD_HISTORY_REPOSITORY: string =
    'MOONRIVER_REWARD_HISTORY_REPOSITORY';
  public static MOONRIVER_ROUND_COLLATOR_REPOSITORY: string =
    'MOONRIVER_ROUND_COLLATOR_REPOSITORY';
  public static MOONRIVER_ROUND_INFO_REPOSITORY: string =
    'MOONRIVER_ROUND_INFO_REPOSITORY';

  public static MOONRIVER_POINT_HISTORY_REPOSITORY: string =
    'MOONRIVER_POINT_HISTORY_REPOSITORY';
  public static MOONRIVER_COLLATOR_NUMBER_HISTORY_REPOSITORY: string =
    'MOONRIVER_COLLATOR_NUMBER_HISTORY_REPOSITORY';
  public static MOONRIVER_NOMINATOR_REWARD_DETAIL_HISTORY_REPOSITORY: string =
    'MOONRIVER_NOMINATOR_REWARD_DETAIL_HISTORY_REPOSITORY';
  public static MOONRIVER_MONITOR_SUBSCRIBE_REPOSITORY: string =
    'MOONRIVER_MONITOR_SUBSCRIBE_REPOSITORY';

  //User Management
  public static USER_FAVORITE_REPOSITORY: string = 'USER_FAVORITE_REPOSITORY';
  public static USER_REPOSITORY: string = 'USER_REPOSITORY';
  public static USER_VERIFY_CODE_REPOSITORY: string =
    'USER_VERIFY_CODE_REPOSITORY';
  public static USER_ADDRESS_BUNDLE_REPOSITORY: string = 'USER_ADDRESS_BUNDLE_REPOSITORY';

  //Platform
  public static PLATFORM_STATISTIC_REPOSITORY: string =
    'PLATFORM_STATISTIC_REPOSITORY';
  public static PROFILE_ADDRESS_SEARCH_REPOSITORY: string =
    'PROFILE_ADDRESS_SEARCH_REPOSITORY';


  //RMRK
  public static RMRK_NFT_REPOSITORY: string = 'RMRK_NFT_REPOSITORY';
  public static RMRK_REMARK_REPOSITORY: string = 'RMRK_REMARK_REPOSITORY';
  public static RMRK_EVENT_REPOSITORY: string = 'RMRK_EVENT_REPOSITORY';
  public static RMRK_COLLECTION_REPOSITORY: string =
    'RMRK_COLLECTION_REPOSITORY';
  public static RMRK_COLLECTION_STATISTIC_REPOSITORY: string =
    'RMRK_COLLECTION_STATISTIC_REPOSITORY';

  //Polkadot Balance
  public static POLKADOT_BALANCE_ACCOUNT_REPOSITORY: string =
    'POLKADOT_BALANCE_ACCOUNT_REPOSITORY';
  public static POLKADOT_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY: string =
    'POLKADOT_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY';
  public static POLKADOT_BALANCE_BALANCE_SETS_REPOSITORY: string =
    'POLKADOT_BALANCE_BALANCE_SETS_REPOSITORY';
  public static POLKADOT_BALANCE_DEPOSITS_REPOSITORY: string =
    'POLKADOT_BALANCE_DEPOSITS_REPOSITORY';
  public static POLKADOT_BALANCE_ENDOWEDS_REPOSITORY: string =
    'POLKADOT_BALANCE_ENDOWEDS_REPOSITORY';
  public static POLKADOT_BALANCE_RESERVEDS_REPOSITORY: string =
    'POLKADOT_BALANCE_RESERVEDS_REPOSITORY';
  public static POLKADOT_BALANCE_RESERVREPATRIATEDS_REPOSITORY: string =
    'POLKADOT_BALANCE_RESERVREPATRIATEDS_REPOSITORY';
  public static POLKADOT_BALANCE_SLASH_REPOSITORY: string =
    'POLKADOT_BALANCE_SLASH_REPOSITORY';
  public static POLKADOT_BALANCE_TRANSFERS_REPOSITORY: string =
    'POLKADOT_BALANCE_TRANSFERS_REPOSITORY';
  public static POLKADOT_BALANCE_UNRESERVEDS_REPOSITORY: string =
    'POLKADOT_BALANCE_UNRESERVEDS_REPOSITORY';
  public static POLKADOT_BALANCE_WITHDRAWS_REPOSITORY: string =
    'POLKADOT_BALANCE_WITHDRAWS_REPOSITORY';
  public static DATABASE_CONNECTION_POLKADOT_IDENTITY_SERVICE: string =
    'DATABASE_CONNECTION_POLKADOT_IDENTITY_SERVICE';

  //Polkadot identity service
  public static POLKADOT_IDENTITY_ACCOUNT_REPOSITORY: string =
    'POLKADOT_IDENTITY_ACCOUNT_REPOSITORY';

  //Moonbeam Balance
  public static DATABASE_CONNECTION_MOONBEAM_BALANCE: string =
  'DATABASE_CONNECTION_MOONBEAM_BALANCE';

  public static MOONBEAM_BALANCE_ACCOUNT_REPOSITORY: string =
    'MOONBEAM_BALANCE_ACCOUNT_REPOSITORY';
  public static MOONBEAM_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY: string =
    'MOONBEAM_BALANCE_ACCOUNT_SNAPSHOTS_REPOSITORY';
  public static MOONBEAM_BALANCE_BALANCE_SETS_REPOSITORY: string =
    'MOONBEAM_BALANCE_BALANCE_SETS_REPOSITORY';
  public static MOONBEAM_BALANCE_DEPOSITS_REPOSITORY: string =
    'MOONBEAM_BALANCE_DEPOSITS_REPOSITORY';
  public static MOONBEAM_BALANCE_ENDOWEDS_REPOSITORY: string =
    'MOONBEAM_BALANCE_ENDOWEDS_REPOSITORY';
  public static MOONBEAM_BALANCE_RESERVEDS_REPOSITORY: string =
    'MOONBEAM_BALANCE_RESERVEDS_REPOSITORY';
  public static MOONBEAM_BALANCE_RESERVREPATRIATEDS_REPOSITORY: string =
    'MOONBEAM_BALANCE_RESERVREPATRIATEDS_REPOSITORY';
  public static MOONBEAM_BALANCE_SLASH_REPOSITORY: string =
    'MOONBEAM_BALANCE_SLASH_REPOSITORY';
  public static MOONBEAM_BALANCE_TRANSFERS_REPOSITORY: string =
    'MOONBEAM_BALANCE_TRANSFERS_REPOSITORY';
  public static MOONBEAM_BALANCE_UNRESERVEDS_REPOSITORY: string =
    'MOONBEAM_BALANCE_UNRESERVEDS_REPOSITORY';
  public static MOONBEAM_BALANCE_WITHDRAWS_REPOSITORY: string =
    'MOONBEAM_BALANCE_WITHDRAWS_REPOSITORY';
  public static MOONBEAM_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY: string =
  'MOONBEAM_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY';
}
