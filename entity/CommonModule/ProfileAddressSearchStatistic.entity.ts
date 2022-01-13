import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['address'])
export class ProfileAddressSearchStatistic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, comment: 'address searched in profile page' })
  address: string;

  @Column({
    nullable: false,
  })
  search_count: number;

  @Column({
    nullable: false,
  })
  last_update_time: Date;
}
