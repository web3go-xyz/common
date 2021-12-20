import { ApiProperty } from '@nestjs/swagger';

export class SectionDateItem {
  @ApiProperty()
  startDate: number;

  @ApiProperty()
  info: string;
}
