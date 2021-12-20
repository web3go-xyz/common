import { ApiProperty } from '@nestjs/swagger';

export class TaskId {
  @ApiProperty({ description: 'the unique id for task' })
  taskId: string;
}
