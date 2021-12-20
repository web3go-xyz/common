import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoonRiverChainState {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ comment: 'the chain name' })
    chain: string = "MoonRiver";

    @ApiProperty()
    @Column({ comment: 'the websocket endpoint' })
    wssEndpoint: string = "wss://moonriver.api.onfinality.io/ws?apikey=70d75730-8f86-4ea4-924e-28579479531f";

    @ApiProperty()
    @Column({ comment: 'the symbol name' })
    symbol: string = "MOVR";


    @ApiProperty()
    @Column({ comment: 'the start roundIndex when monitor begin with', type: 'bigint' })
    startRoundIndex: number = 0;

    @ApiProperty()
    @Column({ comment: 'the start timestamp when monitor begin with', default: '2021-01-01T12:29:33.421' })
    startTimestamp: string = '2021-01-01T12:29:33.421';

    @ApiProperty()
    @Column({
        type: 'int',
        default: 48
    })
    maxCollatorCount: number = 48;

    @ApiProperty()
    @Column({
        type: 'int',
        default: 100
    })
    maxNominatorCount: number = 100;
}