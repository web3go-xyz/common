import { Inject, Injectable } from '@nestjs/common';
import { MyLogger } from './../log/logger.service';

import { RedisService } from 'nestjs-redis';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class MQService {
  private client;

  constructor(
    private redisService: RedisService,
    private readonly logger: MyLogger,
  ) {
    var client = this.redisService.getClient();
    this.client = client;
  }
  getClient() {
    return this.client;
  }
}
