import { Connection } from 'typeorm';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { CustomQuery } from './../../entity/CustomQueryModule/customQuery.entity';
import { User } from './../../entity/UserManagementModule/User.entity';
import { UserVerifyCode } from './../../entity/UserManagementModule/UserVerifyCode.entity';
import { UserFavorite } from './../../entity/UserManagementModule/UserFavorite.entity';
import { AddressTag } from './../../entity/CommonModule/addressTag.entity';
import { PlatformStatistic } from './../../entity/CommonModule/PlatformStatistic.entity';

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
