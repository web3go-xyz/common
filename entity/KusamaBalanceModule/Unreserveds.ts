import { Column, Entity, Index } from "typeorm";

@Index("unreserveds_pkey", ["id"], { unique: true })
@Entity("unreserveds", { schema: "public" })
export class Unreserveds {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "block_number", nullable: true })
  blockNumber: string | null;

  @Column("text", { name: "account_id" })
  accountId: string;

  @Column("numeric", { name: "aid" })
  aid: string;

  @Column("numeric", { name: "balance_change", nullable: true })
  balanceChange: string | null;

  @Column("timestamp without time zone", { name: "timestamp", nullable: true })
  timestamp: Date | null;
}
