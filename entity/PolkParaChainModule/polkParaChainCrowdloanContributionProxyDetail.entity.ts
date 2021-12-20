import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['proxyAccount', 'contributionAccount'])
export class PolkParaChainCrowdloanContributionProxyDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    comment: 'alias funds.edges.node.id',
  })
  crowdloanId: string;

  @Column({ length: 255 })
  proxyAccount: string;

  @Column({length: 255 })
  contributionAccount: string;

  @Column({
    type: 'decimal',
    precision: 30,
    scale: 5,
  })
  amount: number;

  @Column({ type: 'int' })
  blockHeightOnProxy: number;

  @Column({})
  createdAtOnProxy: Date;
}
