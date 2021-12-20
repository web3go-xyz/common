import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['symbol', 'timeIndicator'])
export class Price {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ comment: 'the symbol name like : KSMUSDT, KSMBUSD' })
    symbol: string;

    @Column({ comment: 'the time indicator, should be matched with minutes scale', type: 'bigint' })
    timeIndicator: number;

    @Column({ comment: 'opentime for current price', type: 'bigint' })
    openTime: number;
    @Column({ comment: 'closeTime for current price', type: 'bigint' })
    closeTime: number;

    @Column({
        type: 'decimal',
        precision: 30,
        scale: 10,
    })
    openPrice: number;

    @Column({
        type: 'decimal',
        precision: 30,
        scale: 10,
    })
    highPrice: number;
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 10,
    })
    lowPrice: number;
    @Column({
        type: 'decimal',
        precision: 30,
        scale: 10,
    })
    closePrice: number;


}