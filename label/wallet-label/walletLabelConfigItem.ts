import { ApiProperty } from '@nestjs/swagger';
import { SectionItem } from './sectionItem';
import { SectionDateItem } from './sectionDateItem';

export class WalletLabelConfigItem {
  @ApiProperty()
  contract: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty({ type: SectionItem })
  perForBalance: SectionItem;

  @ApiProperty({ type: SectionItem })
  amountForBalance: SectionItem;

  @ApiProperty({ type: SectionItem })
  perForActivity: SectionItem;

  @ApiProperty({ type: SectionItem })
  amountForSHOTop: SectionItem;

  @ApiProperty({ type: SectionItem })
  perForSHOTop: SectionItem;

  @ApiProperty({ type: SectionItem })
  perForSHOBottom: SectionItem;

  @ApiProperty({ type: SectionDateItem })
  startDateForHighActivity: SectionDateItem;

  @ApiProperty({ type: SectionDateItem })
  startDateForSHO: SectionDateItem;
}
