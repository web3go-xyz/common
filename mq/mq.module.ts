import { Global, Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { MQService } from './mq.service';

import { AppConfig } from '../setting/appConfig';
import { LoggerModule } from '../log/loggerModule';

@Global()
@Module({
  imports: [RedisModule.register(AppConfig.redisOption), LoggerModule],
  controllers: [],
  providers: [MQService],
  exports: [MQService],
})
export class MQModule {}
