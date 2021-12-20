import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
// @Index()
export class PlatformStatistic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100, comment: '' })
  PlatformStatisticType: string;

  @Column({
    nullable: false,
    length: 100,
    comment:
      '',
  })
  PlatformStatisticKey: string;

  @Column({
    nullable: false,
    length: 100,
    comment:
      '',
  })
  PlatformStatisticValue: string;
}
