import { ApiProperty } from '@nestjs/swagger';
import { Payload } from './payload';
import { TaskType } from '../enum/TaskType';
export class TaskCreateRequest {
  @ApiProperty({ default: TaskType.address_activities_analysis })
  taskType: TaskType;
  @ApiProperty({ default: 1 })
  priority: number;
  @ApiProperty({
    default: {
      walletAddressRequest: {
        chainType: 'LIT',
        contract_address: '0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa',
        start_aID: -1,
      },
    },
  })
  payload: Payload;
}
