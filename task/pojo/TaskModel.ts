import { ApiProperty } from '@nestjs/swagger';
import { Payload } from './payload';
import { TaskType } from '../enum/TaskType';
import { ChainType } from './../enum/ChainType';
import { TaskState } from './../enum/TaskState';
import { TaskId } from './taskId';
export class TaskModel extends TaskId {
  @ApiProperty({ default: TaskType.address_activities_analysis })
  taskType: TaskType;

  @ApiProperty({ default: 1 })
  priority: number;

  @ApiProperty({ default: { chainType: ChainType.ETH, address: 'ox123456' } })
  payload: Payload;

  @ApiProperty({ description: 'the state of current task' })
  state: TaskState;

  @ApiProperty({ description: 'the progress of current task' })
  progress: string;

  @ApiProperty({ description: 'the result data of current task' })
  data: any;

  @ApiProperty({ description: '' })
  time: Date;
}
