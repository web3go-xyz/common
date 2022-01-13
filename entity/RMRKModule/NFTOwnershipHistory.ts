import { Column, Entity } from "typeorm";

@Entity("nft_ownership_history", { schema: "public" })
export class NFTOwnershipHistory {

  @Column("text", { primary: true, name: "interaction_n_f_t", nullable: true })
  interactionNFT: string;

  @Column("text", { primary: true, name: "owner" })
  owner: string;

  @Column("timestamp without time zone", { primary: true, name: "start_date", nullable: true })
  start_date: Date | null;

  @Column("timestamp without time zone", { primary: true, name: "end_date", nullable: true })
  end_date: Date | null;

 
}
