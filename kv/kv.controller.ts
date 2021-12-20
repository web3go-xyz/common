import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { KVService } from './kv.service';

@Controller('/kv')
export class KVController {
  constructor(private readonly service: KVService) {}

  @Get('/set')
  @ApiOperation({ summary: 'cache set' })
  @ApiTags('basic')
  async set(
    @Query('key') key: string,
    @Query('value') value: string,
  ): Promise<any> {
    console.log(key);
    await this.service.set(key, value);
    var v = await this.service.get(key);
    return { key: key, value: v };
  }

  @Get('/get')
  @ApiOperation({ summary: 'cache get' })
  @ApiTags('basic')
  async get(@Query('key') key: string): Promise<any> {
    console.log(key);
    var v = await this.service.get(key);
    return { key: key, value: v };
  }
}
