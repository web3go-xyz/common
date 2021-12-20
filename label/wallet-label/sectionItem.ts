import { ApiProperty } from '@nestjs/swagger';

export class SectionItem {
  @ApiProperty()
  value: number;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  info: string;
}
