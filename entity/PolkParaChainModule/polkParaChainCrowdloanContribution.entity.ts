import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['crowdloanId', 'contributionId'])
export class PolkParaChainCrowdloanContribution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    comment: 'alias funds.edges.node.id',
  })
  crowdloanId: string;

  @Column({
    length: 255,
    comment: 'alias contributions.edges.node.id',
  })
  contributionId: string;

  @Column({ length: 255 })
  account: string;

  @Column({
    type: 'decimal',
    precision: 30,
    scale: 5,
  })
  amount: number;

  @Column({ type: 'int' })
  blockNum: number;

  @Column({})
  createdAt: Date;
}
