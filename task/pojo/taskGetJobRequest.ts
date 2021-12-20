import { ApiProperty } from '@nestjs/swagger';
import { TaskType } from '../enum/TaskType';
export class TaskGetJobRequest {
  @ApiProperty({ default: [TaskType.address_activities_analysis] })
  taskType: TaskType[];
}
