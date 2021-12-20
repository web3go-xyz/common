import { Global, Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { KVService } from './kv.service';

import { KVController } from './kv.controller';
import { AppConfig } from '../setting/appConfig';
import { LoggerModule } from '../log/loggerModule';

@Global()
@Module({
  imports: [RedisModule.register(AppConfig.redisOption), LoggerModule],
  controllers: [KVController],
  providers: [KVService],
  exports: [KVService, LoggerModule],
})
export class KVModule { }
