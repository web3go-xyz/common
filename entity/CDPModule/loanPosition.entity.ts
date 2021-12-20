import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['chain', 'tokenId', 'accountId'], { unique: true })
export class LoanPosition {
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
    @Column({ comment: 'accountId of current loanPosition', length: 100 })
    accountId: string;

    @ApiProperty()
    @Column({
        comment: 'debit of current loanPosition',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    debit: number;

    @ApiProperty()
    @Column({
        comment: 'collateral of current loanPosition',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    collateral: number;

    @ApiProperty()
    @Column({
        comment: 'debit formated with scale',
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    debitFormat: number;

    @ApiProperty()
    @Column({
        comment: 'collateral formated with scale',
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
        comment: 'ratio percentage calculated at this very moment'
    })
    ratioPercentage: number;

    @ApiProperty()
    @Column({ comment: 'status of current loanPosition: Safe, Warning,Danger', length: 20 })
    status: string = 'Safe';

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
        comment: 'price of collateral at this very moment'
    })
    collateralPrice: number;
}