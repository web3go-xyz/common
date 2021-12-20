import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChainState {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty()
    @Column({ comment: 'the chain name' })
    chain: string = "Karura";

    @ApiProperty()
    @Column({ comment: 'the websocket endpoint' })
    wssEndpoint: string = "wss://karura.api.onfinality.io/public-ws";

    @ApiProperty()
    @Column({ comment: 'the symbol name like : KSM' })
    symbol: string = "KSM";

    @ApiProperty()
    @Column({ comment: 'the latest update timestamp', type: 'bigint' })
    latestUpdateTimestamp: number = new Date().getTime();

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    stabilityFeePercentage: number = 2.95;


    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
    }) liquidationRatioPercentage: number = 0;

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    liquidationPenaltyPercentage: number = 0;

    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 5,
    })
    requiredCollateralRatioPercentage: number = 0;

}