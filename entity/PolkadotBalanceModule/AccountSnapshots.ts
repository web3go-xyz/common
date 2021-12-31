import { Column, Entity, Index } from "typeorm";

@Index("account_snapshots_pkey", ["id"], { unique: true })
@Entity("account_snapshots", { schema: "public" })
export class AccountSnapshots {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "account_id" })
  accountId: string;

  @Column("numeric", { name: "snapshot_at_block" })
  snapshotAtBlock: string;

  @Column("numeric", { name: "free_balance" })
  freeBalance: string;

  @Column("numeric", { name: "reserve_balance" })
  reserveBalance: string;

  @Column("numeric", { name: "total_balance" })
  totalBalance: string;
}
