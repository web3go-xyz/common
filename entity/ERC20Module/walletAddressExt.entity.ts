import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['contractAddress', 'walletAddress'])
export class WalletAddressExt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  contractAddress: string;

  @Column({ length: 255 })
  walletAddress: string;

  @Column({
    comment: 'last update time when fetch balance / transaction ',

    default: '1970-01-01 00:00:00',
  })
  lastUpdateTime: Date;
}
