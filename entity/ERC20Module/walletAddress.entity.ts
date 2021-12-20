import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['contractAddress', 'walletAddress'])
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  chainType: string;

  @Column({ length: 255 })
  contractAddress: string;

  @Column({ length: 255 })
  walletAddress: string;
}
