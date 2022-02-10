import { Column, Entity, Index } from "typeorm";

@Index("accounts_latest_sync_block_pkey", ["id"], { unique: true })
@Entity("accounts_latest_sync_block", { schema: "public" })
export class AccountsLatestSyncBlock {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "block_number"})
  blockNumber: number;
}