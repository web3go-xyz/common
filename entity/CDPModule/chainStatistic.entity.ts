import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['chain', 'tokenId'], { unique: true })
export class ChainStatistic {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ comment: 'the chain name', length: 20 })
    chain: string = "Karura";

    @ApiProperty()
    @Column({ comment: 'the token name like : KSM', length: 20 })
    tokenId: string = "KSM";

    @ApiProperty()
    @Column({ comment: 'total count of loanPosition', type: 'bigint' })
    totalCount: number;

    @ApiProperty()
    @Column({
        comment: 'total debit',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    debit: number;

    @ApiProperty()
    @Column({
        comment: 'total collateral',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    collateral: number;

    @ApiProperty()
    @Column({
        comment: 'total debit formated with scale',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    debitFormat: number;

    @ApiProperty()
    @Column({
        comment: 'total collateral formated with scale',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    collateralFormat: number;

    @ApiProperty()
    @Column({ comment: 'the latest update timestamp', type: 'bigint' })
    latestUpdateTimestamp: number = new Date().getTime();

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
        comment: 'price of  collateral at this very moment'
    })
    collateralPrice: number;
}