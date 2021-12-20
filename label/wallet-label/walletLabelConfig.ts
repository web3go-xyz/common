import { ApiProperty } from '@nestjs/swagger';
import { WalletLabelConfigItem } from './walletLabelConfigItem';

export class WalletLabelConfig {
  @ApiProperty({
    default: [new WalletLabelConfigItem()],
    type: [WalletLabelConfigItem],
  })
  configs: WalletLabelConfigItem[];

  @ApiProperty()
  lastUpdateTime: Date;
}
