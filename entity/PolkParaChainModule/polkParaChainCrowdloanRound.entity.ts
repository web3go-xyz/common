import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
export class PolkParaChainCrowdloanRound {
  constructor() {

  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'round index to indicate the crowdloan'
  })
  roundIndex: number;

  @Column({
    length: 500,
    comment:
      'expirationBlock , split by quotes (,)',
  })
  expirationBlocks: string;

  @Column({
    comment:
      'flag to indicate whether current round is ongoing  or history',
  })
  ongoing: boolean;

  @Column({
    length: 500,
    comment:
      'description for current round',
  })
  description: string;

}
