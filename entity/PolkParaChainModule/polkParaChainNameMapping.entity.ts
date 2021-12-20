import { PrimaryGeneratedColumn, Column, Entity, Index, Unique } from 'typeorm';

@Entity() 
@Index(['paraId'])
export class PolkParaChainNameMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  paraId: string;

  @Column({
    length: 255,
    comment: 'project name',
  })
  projectName: string;

  @Column({
    length: 255,
    comment: 'icon for parachain',
  })
  icon: string;
}
