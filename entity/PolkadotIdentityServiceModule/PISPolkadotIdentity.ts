import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity('pis_identity', { schema: 'public' })
export class PISPolkadotIdentity {
  constructor() {
    this.lastUpdateTime = new Date();
  }

  @PrimaryColumn({ type: 'varchar', length: 255, name: 'id', primary: true, comment: 'address' })
  id: string;

  @PrimaryColumn({ type: 'text', name: 'network', nullable: false, default: 'polkadot' })
  network: string | null = 'polkadot';

  @Column({ type: 'varchar', length: 255, name: 'account_public_key', nullable: true, comment: 'substrate public key' })
  accountPublicKey: string;

  @Column({ type: 'text', name: 'display', nullable: true })
  display: string | null;

  @Column({ type: 'text', name: 'legal', nullable: true })
  legal: string | null;

  @Column({ type: 'text', name: 'web', nullable: true })
  web: string | null;

  @Column({ type: 'text', name: 'riot', nullable: true })
  riot: string | null;

  @Column({ type: 'text', name: 'email', nullable: true })
  email: string | null;

  @Column({ type: 'text', name: 'image', nullable: true })
  image: string | null;

  @Column({ type: 'text', name: 'twitter', nullable: true })
  twitter: string | null;

  @Column({ type: 'text', name: 'judgements', nullable: true })
  judgements: string | null;

  @Column({ type: 'jsonb', name: 'raw_identity_in_json', nullable: true })
  rawIdentityInJson: object | null;


  @Column({ type: 'varchar', length: 255, name: 'account_polkadot' })
  accountPolkadot: string = '';

  @Column({ type: 'varchar', length: 255, name: 'sub_of', nullable: true })
  subOf: string;

  @Column({ type: 'timestamp', name: 'last_update_time' })
  lastUpdateTime: Date;

}
