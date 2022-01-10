import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('pis_identity_pkey', ['id'], { unique: true })
@Entity('pis_identity', { schema: 'public' })
export class PISPolkadotIdentity {
  constructor() {
    this.lastUpdateTime = new Date();
  }

  @Column({type:'text', name: 'id', primary: true})
  id: string;

  @Column({ type:'text', name: 'display', nullable: true})
  display: string | null;

  @Column({type:'text', name: 'legal', nullable: true })
  legal: string | null;

  @Column({type:'text', name: 'web', nullable: true })
  web: string | null;

  @Column({type:'text', name: 'riot', nullable: true })
  riot: string | null;

  @Column({type:'text', name: 'email', nullable: true })
  email: string | null;

  @Column({type:'text', name: 'image', nullable: true })
  image: string | null;

  @Column({type:'text', name: 'twitter', nullable: true })
  twitter: string | null;

  @Column({ type:'text', name: 'account_public_key'})
  accountPublicKey: string;

  @Column({ type:'text', name: 'account_polkadot'})
  accountPolkadot: string;

  @Column({type:'jsonb', name: 'raw_identity_in_json', nullable: true })
  rawIdentityInJson: object | null;

  @Column({type:'timestamp', name: 'last_update_time'})
  lastUpdateTime: Date;
}
