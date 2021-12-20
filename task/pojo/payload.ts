import { ApiProperty } from '@nestjs/swagger';

export class Payload {
  tokenRequest: TokenRequest;
  nftRequest: NFTRequest;
  walletAddressRequest: WalletAddressRequest;
  polkParaChainRequest: PolkParaChainRequest;
}
export class TokenRequest {
  @ApiProperty({
    description: '',
  })
  tokenContract: string[];
  @ApiProperty({
    description: '',
  })
  walletAddress: string[];
}

export class NFTRequest {
  @ApiProperty({
    description: '',
  })
  nftContract: string[];
  @ApiProperty({
    description: '',
  })
  walletAddress: string[];
}
export class WalletAddressRequest {
  @ApiProperty({
    description: '',
  })
  chainType: string;
  @ApiProperty({
    description: '',
  })
  contract_address: string;

  @ApiProperty({
    description: '',
  })
  start_aID: number;
}

export class PolkParaChainRequest {
  @ApiProperty({ description: 'tag' })
  tag: string;

  @ApiProperty({ description: 'comment for request' })
  comment: string;

  @ApiProperty({ description: 'paraId for Polk paraChain', nullable: true })
  paraId: string;

  @ApiProperty({
    default: '2021-EmKDCmxqHbmY4fsNSvM1fWX1z3jSGYKEekxtBqFsxzHW96E-0',
    nullable: true,
  })
  crowdloanId: string;

  @ApiProperty({
    default: '2021-11-01T00:00:00.000',
    nullable: true,
  })
  latestFetchTime: string;

}
