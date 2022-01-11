import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['contractAddress', 'walletAddress'])
export class WalletAddressInfo {
  constructor() {
    labels: '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  chainType: string;

  @Column({ length: 255 })
  contractAddress: string;

  @Column({ length: 255 })
  walletAddress: string;

  @Column({
    length: 500,
    comment:
      'the customized labels and tags marked for the wallet address, this column is stored as json string',
  })
  labels: string;

  @Column({
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'the balance of wallet address',
  })
  balance: number;

  @Column({
    type: 'bigint',
    comment: 'the timestamp (seconds) of first transaction occured',
    default: 1230739200,
  })
  firstInDate: number;

  @Column({ default: 0, type: 'int', comment: 'the decimal of token' })
  tokenDecimal: number;
  @Column({
    default: 0,
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'max balance ever',
  })
  maxBalance: number;

  @Column({ default: 0, type: 'int', comment: 'Number of in-Transfer' })
  countIn: number;

  @Column({ default: 0, type: 'int', comment: 'Number of out-Transfer' })
  countOut: number;

  @Column({ default: 0, type: 'int', comment: 'Number of Transfer totally' })
  countTotal: number;

  @Column({
    default: 0,
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'in-Transfer amount',
  })
  amountIn: number;

  @Column({
    default: 0,
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'out-Transfer amount',
  })
  amountOut: number;

  @Column({
    default: 0,
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'total Transfer amount',
  })
  amountTotal: number;

  @Column({
    default: 0,
    type: 'decimal',
    precision: 65,
    scale: 30,
    comment: 'average amount per transfer',
  })
  amountAver: number;
}
