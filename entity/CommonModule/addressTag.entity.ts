import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['address'])
export class AddressTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, comment: 'wallet address ' })
  address: string;

  @Column({
    length: 255,
    comment:
      'tag marked for wallet address, such as : Binance, Alcumex Exchange',
  })
  addressTag: string;

  @Column({
    length: 500,
    comment:
      'description',
  })
  description: string;
}
