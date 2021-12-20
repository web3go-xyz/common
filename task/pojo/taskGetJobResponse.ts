import { ApiProperty } from '@nestjs/swagger';
import { TaskType } from '../enum/TaskType';
import { Payload } from './payload';
export class TaskGetJobResponse {
  @ApiProperty({ default: TaskType.address_activities_analysis })
  taskType: TaskType;
  @ApiProperty({ default: {}, description: 'task detail' })
  payload: Payload;

  @ApiProperty({ default: {}, description: 'taskId' })
  taskId: string;
}
