import { Column, Entity, Index } from "typeorm";


@Index("collection_statistic_entities_pkey", ["id"], { unique: true })
@Entity("collection_statistic_entities", { schema: "public" })
export class CollectionStatisticEntities {

  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "collection_volume", nullable: false })
  collection_volume: number;

  @Column("integer", { name: "collection_transactions", nullable: false })
  collection_transactions: number;

  @Column("numeric", { name: "max_price", nullable: false })
  max_price: number;

  @Column("numeric", { name: "min_price", nullable: false })
  min_price: number;

  @Column("numeric", { name: "avg_price", nullable: false })
  avg_price: number;

  @Column("numeric", { name: "max_price_list", nullable: false })
  max_price_list: number;

  @Column("numeric", { name: "min_price_list", nullable: false })
  min_price_list: number;

  @Column("numeric", { name: "avg_price_list", nullable: false })
  avg_price_list: number;


  @Column("integer", { name: "buyer_count", nullable: true })
  buyer_count: number;

  @Column("timestamp without time zone", {
    name: "timestamp_updated_at",
    nullable: false,
  })
  timestampUpdatedAt: Date;


}
