import { ChainType } from './../../entity/ERC20Module/chainType.entity';
import { RepositoryConsts } from './../../orm/repositoryConsts';
import { Connection } from 'typeorm';
import { WalletAddress } from './../../entity/ERC20Module/walletAddress.entity';
import { WalletAddressInfo } from './../../entity/ERC20Module/walletAddressInfo.entity';
import { WalletAddressTransaction } from './../../entity/ERC20Module/walletAddressTransaction.entity';
import { AddressTag } from './../../entity/CommonModule/addressTag.entity';
import { ChainTypeExt } from './../../entity/ERC20Module/chainTypeExt.entity';
import { WalletAddressExt } from './../../entity/ERC20Module/walletAddressExt.entity';
import { LabelMarkConfig } from './../../entity/ERC20Module/labelMarkConfig.entity';

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
  },
];
