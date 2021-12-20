import { PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['id'])
export class LabelMarkConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    comment: 'config as json format',
  })
  config: string;
}
