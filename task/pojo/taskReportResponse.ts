import { ApiProperty } from '@nestjs/swagger';
import { TaskId } from './taskId';
export class TaskReportResponse extends TaskId {
  @ApiProperty({
    description:
      'report result, return ok if success, otherwise return the error message',
  })
  result: string;
}
