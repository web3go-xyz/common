import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['chainType', 'contractAddress'])
export class ChainType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: 'chain type as token type , such as : LIT, ATA',
  })
  chainType: string;

  @Column({ length: 255 })
  chainName: string;

  @Column({ length: 255 })
  contractAddress: string;

  @Column({ length: 255 })
  description: string;
}
