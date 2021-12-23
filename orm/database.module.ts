import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

/**
 * @deprecated we should use database.providers.v2, repository.providers.v2 directly to get more flexibility,  instead of import all things through current module. 
 * 
 * eg:  
 * 
 * providers: [ ...databaseProviders_moonriver, ...repositoryProviders_moonriver ],
 */
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule { }
