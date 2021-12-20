import { ApiProperty } from '@nestjs/swagger';
import { TaskId } from './taskId';
export class TaskReportResultRequest extends TaskId {
  @ApiProperty({ description: 'the result data of current task' })
  data: any;
  @ApiProperty()
  taskType: any;
}
