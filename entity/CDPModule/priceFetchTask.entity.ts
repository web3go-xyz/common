import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PriceFetchTask {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ comment: 'the symbol name like : KSMUSDT, KSMBUSD' })
    symbol: string = "KSMUSDT";

    @Column({ comment: 'the latest price timestamp', type: 'bigint' })
    latestPriceTimestamp: number = new Date('2020-09-02').getTime();

    @Column({ comment: 'the api url for Binance' })
    api_url: string = 'https://api.binance.com';

    @Column({ comment: 'the apiKey ' })
    apiKey: string = '28YDMko3RtKoOzKZCArKZB13ojht1EbC2WUfBEUyiSQ43gvT6VPpgo75sxIkSvBi';

    @Column({ comment: 'the apiSecret ' })
    apiSecret: string = '8tYKx9z9pQKvpoe6O3tlNjAeUJrkCsY2BhFbfvdyGoAWrXs5q9sm40KGuJKtfifB';

    @Column({ comment: 'the price kline interval, such as : 1m ' })
    interval: string = '1m';

    @Column({ comment: 'the price count in the fetch range ' })
    limit: number = 60;

    @Column({ comment: 'the time step in milliseconds, default is 1hour= 60 * 60 * 1000', type: 'bigint' })
    timeStep: number = 60 * 60 * 1000;
}