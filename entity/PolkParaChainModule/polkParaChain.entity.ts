import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['paraId'])
export class PolkParaChain {
  constructor() {
    this.lastUpdateTime = new Date();
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  paraId: string;

  @Column({
    length: 255,
    comment:
      'this cannot be retrieved from blockchain and it is a prior knowledge. refer to table: polkParaChainNameMapping',
  })
  projectName: string;

  @Column({
    length: 255,
    comment: 'icon for parachain',
  })
  icon: string;
  
  @Column({ comment: 'last update time of paraChain' })
  lastUpdateTime: Date;
}
