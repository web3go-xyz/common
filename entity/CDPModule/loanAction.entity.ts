import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['chain', 'tokenId', 'accountId', 'actionId'])
export class LoanAction {
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
    @Column({ comment: 'accountId of current loanAction', length: 100 })
    accountId: string;

    @ApiProperty()
    @Column({ comment: 'actionId of current loanAction', length: 50 })
    actionId: string;

    @ApiProperty()
    @Column({ comment: 'debit of current loanAction', length: 50 })
    type: string;

    @ApiProperty()
    @Column({ comment: 'debit of current loanAction', nullable: true, length: 50 })
    subType: string;

    @ApiProperty()
    @Column({ comment: 'timestamp when action occured', type: 'bigint' })
    timestamp: number = new Date().getTime();

    @ApiProperty()
    @Column({ comment: 'original data as JSON', type: 'text' })
    data_original: string;

    @ApiProperty()
    @Column({
        comment: 'debit adjustment of this loanAction ',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    debitAdjustment: number;

    @ApiProperty()
    @Column({
        comment: 'debit after this loanAction ',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    debit: number;

    @ApiProperty()
    @Column({
        comment: 'collateral adjustment of this LoanAction',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    collateralAdjustment: number;

    @ApiProperty()
    @Column({
        comment: 'collateral after this LoanAction',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    collateral: number;

    @ApiProperty()
    @Column({
        comment: 'debit formated with scale',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    debitFormat: number;

    @ApiProperty()
    @Column({
        comment: 'collateral formated with scale',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    collateralFormat: number;

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
        comment: 'price of collateral at this very moment'
    })
    collateralPrice: number;

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
        comment: 'ratio percentage calculated at this very moment'
    })
    ratioPercentage: number;

    @ApiProperty()
    @Column({ comment: 'status of current loanAction: Safe, Warning,Danger', length: 20 })
    status: string = 'Safe';

    @ApiProperty()
    @Column({
        comment: 'debit adjustment of this loanAction when  ConfiscateCollateralAndDebit triggered',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    debitAdjustment_balance: number;
    @ApiProperty()
    @Column({
        comment: 'collateral adjustment of this LoanAction when ConfiscateCollateralAndDebit triggered',
        type: 'decimal',
        precision: 30,
        scale: 5,
        default: 0
    })
    collateralAdjustment_balance: number;



    @ApiProperty()
    @Column({
        comment: 'blockNumber of current loanAction',
        type: 'bigint',
        default: 0
    })
    blockNumber: number;
    @ApiProperty()
    @Column({
        comment: 'blockId of current loanAction'
    })
    blockId: string;
    @ApiProperty()
    @Column({
        comment: 'extrinsicId of current loanAction'
    })
    extrinsicId: string;
}