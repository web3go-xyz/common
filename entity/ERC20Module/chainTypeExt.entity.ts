import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['contractAddress'])
export class ChainTypeExt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  contractAddress: string;

  @Column({
    type: 'bigint',
    comment:
      'the aID is used to query wallet-address from theGraph.com, it will be used in paramters like [ aID_gt : ${aID} ]',
  })
  walletAddress_latest_aID: number;

  @Column({
    comment: 'last update time when update walletAddress_latest_aID',
    nullable: true,
    default: '1970-01-01 00:00:00',
  })
  lastUpdateTime: Date;
}
