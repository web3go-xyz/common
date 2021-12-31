import { Column, Entity, Index } from 'typeorm';

@Index('pis_accounts_pkey', ['id'], { unique: true })
@Entity('pis_accounts', { schema: 'public' })
export class PISAccount {
  @Column('text', { primary: true, name: 'id' })
  id: string;

  @Column('numeric', { name: 'create_at_block' })
  createAtBlock: number;
}
