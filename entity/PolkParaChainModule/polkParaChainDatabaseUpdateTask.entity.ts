import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['taskName', 'paraId'])
export class PolkParaChainDatabaseUpdateTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false
  })
  taskName: string;
  
  @Column({
    length: 255,
    nullable: false
  })
  paraId: string;

  @Column({
    length: 255,
    comment: 'alias funds.edges.node.id',
    nullable: false
  })
  crowdloanId: string;

  @Column({ 
    comment: 'latest time ( string format ) to fetch contributions, the system use the time to fetch the diff data of contributions;最近查询的时间,系统使用该时间查询差异数据(出于性能优化考虑)', 
    default: '',
  })
  latestFetchTime: string;
}