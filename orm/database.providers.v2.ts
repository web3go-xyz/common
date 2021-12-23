import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from './repositoryConsts';
import { AppConfig } from './../setting/appConfig';



export const databaseProviders_main = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption,
        entities: [
          join(__dirname, '..', 'entity', 'UserManagementModule', '*.{js,ts}'),
          join(__dirname, '..', 'entity', 'ERC20Module', '*.{js,ts}'),
          join(__dirname, '..', 'entity', 'CommonModule', '*.{js,ts}'),
          join(__dirname, '..', 'entity', 'PolkParaChainModule', '*.{js,ts}'),
          join(__dirname, '..', 'entity', 'CustomQueryModule', '*.{js,ts}')],
      };
      return await createConnection(connectionOption);
    },
  }];

export const databaseProviders_cdp = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_CDP,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4CDPDB,
        entities: [join(__dirname, '..', 'entity', 'CDPModule', '*.{js,ts}'),
        join(__dirname, '..', 'entity', 'CommonModule', '*.{js,ts}'),],
      };
      return await createConnection(connectionOption);
    },
  }];

export const databaseProviders_moonriver = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_MOONRIVER,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4MoonRiverDB,
        entities: [join(__dirname, '..', 'entity', 'MoonRiverModule', '*.{js,ts}'),
        join(__dirname, '..', 'entity', 'CommonModule', '*.{js,ts}'),],
      };
      return await createConnection(connectionOption);
    },
  }];

export const databaseProviders_polkadot = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_POLKADOT_PARACHAIN,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4PolkadotParaChain,
        entities: [
          join(__dirname, '..', 'entity', 'PolkParaChainModule', '*.{js,ts}'),
          join(__dirname, '..', 'entity', 'CommonModule', '*.{js,ts}'),]
      };
      return await createConnection(connectionOption);
    },
  }];


export const databaseProviders_kusama = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_KUSAMA_PARACHAIN,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4KusamaParaChain,
        entities: [
          join(__dirname, '..', 'entity', 'PolkParaChainModule', '*.{js,ts}'),
          join(__dirname, '..', 'entity', 'CommonModule', '*.{js,ts}'),]
      };
      return await createConnection(connectionOption);
    },
  },
];

export const databaseProviders_rmrk = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_RMRK,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4RMRKDB,
        entities: [
          join(__dirname, '..', 'entity', 'RMRKModule', '*.{js,ts}'),]
      };
      return await createConnection(connectionOption);
    },
  },
];
