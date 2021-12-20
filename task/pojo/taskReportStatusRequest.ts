import { ApiProperty } from '@nestjs/swagger';
import { TaskState } from '../enum/TaskState';
import { TaskId } from './taskId';
export class TaskReportStatusRequest extends TaskId {
  @ApiProperty({ description: 'the state of current task' })
  state: TaskState;
  
  @ApiProperty({ description: 'the progress of current task' })
  progress: string;
}
