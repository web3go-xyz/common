import { ApiProperty } from '@nestjs/swagger';
import { TaskId } from './taskId';
import { TaskState } from './../enum/TaskState';
export class TaskResponse extends TaskId {
  @ApiProperty({ description: 'the state of current task' })
  state: TaskState;

  @ApiProperty({ description: 'the progress of current task' })
  progress: string;
}
