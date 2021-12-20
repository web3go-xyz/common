import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['contractAddress', 'walletAddress'])
export class WalletAddressTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  chainType: string;

  @Column({ length: 255 })
  contractAddress: string;

  @Column({ length: 255 })
  walletAddress: string;

  @Column({ type: 'bigint', comment: 'timestamp (seconds) of transfer' })
  transactionTimestamp: number;

  @Column({ type: 'int', comment: 'transfer direction, 1=in ,2=out' })
  direction: number;

  @Column({
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'transfer amount',
  })
  amount: number;

  @Column({
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'balance of after this transaction',
  })
  balanceAtPresent: number;

  @Column({ comment: 'hash of this block' })
  hash: string;

  @Column({ comment: 'incoming address', nullable: true })
  from: string;
  @Column({ comment: 'outgoing address', nullable: true })
  to: string;
}
