import { Column, Entity, Index } from "typeorm";

@Index("accounts_pkey", ["id"], { unique: true })
@Entity("accounts", { schema: "public" })
export class Accounts {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "free_balance", nullable: true })
  freeBalance: bigint | null;

  @Column("numeric", { name: "reserve_balance", nullable: true })
  reserveBalance: bigint | null;

  @Column("numeric", { name: "total_balance", nullable: true })
  totalBalance: bigint | null;

  @Column("numeric", { name: "aid", nullable: true })
  aid: string | null;

  @Column("numeric", { name: "at_block", nullable: true })
  atBlock: string | null;
}
