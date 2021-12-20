import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['paraId', 'crowdloanId'])
export class PolkParaChainCrowdloan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  paraId: string;

  @Column({
    length: 255,
    comment: 'alias funds.edges.node.id',
  })
  crowdloanId: string;

  @Column({ type: 'int', comment: 'alias firstSlot' })
  firstLease: number;
  @Column({ type: 'int', comment: 'alias lastSlot' })
  lastLease: number;

  @Column({
    type: 'decimal',
    precision: 30,
    scale: 5,
  })
  raised: string;

  @Column({
    type: 'decimal',
    precision: 30,
    scale: 5,
  })
  cap: string;

  @Column({ type: 'int' })
  expirationBlock: number;

  @Column({ length: 50 })
  status: string;

  @Column({ comment: 'visible to show current crowdloan, to filter the test records', default: true })
  visible: boolean;

  @Column({ comment: 'latest time ( string format ) to fetch contributions, the system use the time to fetch the diff data of contributions;最近查询的时间,系统使用该时间查询差异数据(出于性能优化考虑)', default: '' })
  latestFetchTime: string;
}
