import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { CollectionEntities } from './../../entity/RMRKModule/CollectionEntities';
import { NFTEntities } from './../../entity/RMRKModule/NFTEntities';
import { RemarkEntities } from './../../entity/RMRKModule/RemarkEntities';
import { EventEntities } from './../../entity/RMRKModule/EventEntities';
import { CollectionStatisticEntities } from './../../entity/RMRKModule/CollectionStatisticEntities';

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
