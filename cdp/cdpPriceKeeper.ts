import { Price } from "src/common/entity/CDPModule/price.entity";
import { Between, LessThanOrEqual, Repository } from "typeorm";

export class CDPPriceKeeper {
    static getTimeIntervalValue(timeIntervalString: string) {
        if (timeIntervalString === '1m') {
            return 60 * 1000;
        }
        if (timeIntervalString === '5m') {
            return 5 * 60 * 1000;
        }
        if (timeIntervalString === '15m') {
            return 15 * 60 * 1000;
        }
        if (timeIntervalString === '1h') {
            return 60 * 60 * 1000;
        }
        if (timeIntervalString === '1d') {
            return 24 * 60 * 60 * 1000;
        }
        return 60 * 1000;
    }
    static formatTimeInterval(timestamp: number, timeIntervalString: string): number {
        if (timeIntervalString === '1m') {
            return this.formatToMinute(timestamp);
        }
        if (timeIntervalString === '5m') {
            return this.formatToSpecifyMinutes(timestamp, 5);
        }
        if (timeIntervalString === '15m') {
            return this.formatToSpecifyMinutes(timestamp, 15);
        }
        if (timeIntervalString === '1h') {
            return this.formatToHour(timestamp);
        }
        if (timeIntervalString === '1d') {
            return this.formatToDay(timestamp);
        }
        return this.formatToMinute(timestamp);
    }

    private static cdpPriceRepository: Repository<Price>;
    private static priceMap = {};
    static setDataRepository(repository: Repository<Price>) {
        if (CDPPriceKeeper.cdpPriceRepository == null) {
            CDPPriceKeeper.cdpPriceRepository = repository;
        }
    }
    private static PRICE_FLAG = 'openPrice';
    static async getLatestPirce(): Promise<number> {
        let priceObj = await CDPPriceKeeper.getLatestPirceObj();
        let price = priceObj[CDPPriceKeeper.PRICE_FLAG];

        // console.log('getLatestPirce:', price);

        return price;
    }
    static async getLatestPirceObj(): Promise<Price> {
        let latestPriceRecord = await CDPPriceKeeper.cdpPriceRepository.findOne({
            where: {
                symbol: 'KSMUSDT'
            },
            order: {
                timeIndicator: 'DESC'
            }
        }
        );

        let key = latestPriceRecord.timeIndicator.toString();
        if (CDPPriceKeeper.priceMap[key] === undefined) {
            CDPPriceKeeper.priceMap[key] = latestPriceRecord[CDPPriceKeeper.PRICE_FLAG];
        }
        return latestPriceRecord;
    }


    static async getPirceAtSpecifiedTime(timestamp: number): Promise<number> {
        //format
        let timeIndicator: number = CDPPriceKeeper.formatToMinute(timestamp);

        let key = timeIndicator.toString();

        //console.log('timeIndicator:', timeIndicator);
        //console.log('CDPPriceKeeper.priceMap:',CDPPriceKeeper.priceMap);

        if (CDPPriceKeeper.priceMap[key] !== undefined) {
            //console.log('CDPPriceKeeper.priceMap cache hit');
            return CDPPriceKeeper.priceMap[key];
        }

        let priceObj = await CDPPriceKeeper.getPirceObjAtSpecifiedTime(timestamp);

        CDPPriceKeeper.priceMap[key] = priceObj[CDPPriceKeeper.PRICE_FLAG];

        let price = priceObj[CDPPriceKeeper.PRICE_FLAG];

        // console.log('getPirceAtSpecifiedTime:', price, ',timestamp:', timestamp);

        return price;

    }
    static async getPirceObjAtSpecifiedTime(timeIndicator: number): Promise<Price> {

        let priceRecord = await CDPPriceKeeper.cdpPriceRepository.findOne({
            where: {
                symbol: 'KSMUSDT',
                timeIndicator: LessThanOrEqual(timeIndicator)
            },
            order: {
                timeIndicator: 'DESC'
            }
        }
        );
        if (!priceRecord) { priceRecord = new Price(); }
        return priceRecord;
    }


    static async getPriceRange(actual_startTime: number, actual_endTime: number): Promise<any> {

        actual_startTime = this.formatToMinute(actual_startTime);
        actual_endTime = this.formatToMinute(actual_endTime);
        let priceRecords = await CDPPriceKeeper.cdpPriceRepository.find({
            where: {
                symbol: 'KSMUSDT',
                timeIndicator: Between(actual_startTime, actual_endTime)
            },
            order: {
                timeIndicator: 'ASC'
            },
            select: ["timeIndicator", "openPrice"]
        }
        );
        if (!priceRecords) { return {} }

        let priceRange = {};
        priceRecords.forEach(p => {
            priceRange[p.timeIndicator] = p.openPrice;
        });

        return priceRange;
    }

    static formatToMinute(timestamp: number): number {
        if (typeof timestamp === 'string') {
            timestamp = Number(timestamp);
        }
        let d = new Date(timestamp);
        // console.log('formatToMinute:', d);

        let isoString = d.toISOString();
        let newString = isoString.substr(0, isoString.length - 7) + '00.000Z';
        // console.debug('formatToMinute:', isoString, '=>', newString);

        let minuteTimestamp = new Date(newString).getTime();
        return minuteTimestamp;
    }

    static formatToSpecifyMinutes(timestamp: number, specifyMinutes: number): number {
        if (typeof timestamp === 'string') {
            timestamp = Number(timestamp);
        }
        let d = new Date(timestamp);

        let isoString = d.toISOString();
        let hourPart = isoString.substr(0, isoString.length - 10);

        let minute = parseInt(isoString.substr(14, 2));

        let minutuRange = Math.floor(minute / specifyMinutes) * specifyMinutes;
        let minutePart = minutuRange < 10 ? ('0' + minutuRange) : minutuRange + ':00.000Z';
        let newString = hourPart + minutePart;

        let minuteTimestamp = new Date(newString).getTime();
        return minuteTimestamp;
    }

    static formatToHour(timestamp: number): number {
        if (typeof timestamp === 'string') {
            timestamp = Number(timestamp);
        }
        let d = new Date(timestamp);

        let isoString = d.toISOString();
        let newString = isoString.substr(0, isoString.length - 10) + '00:00.000Z';

        let hourTimestamp = new Date(newString).getTime();
        return hourTimestamp;
    }

    static formatToDay(timestamp: number): number {
        if (typeof timestamp === 'string') {
            timestamp = Number(timestamp);
        }
        let d = new Date(timestamp);

        let isoString = d.toISOString();
        let newString = isoString.substr(0, isoString.length - 13) + '00:00:00.000Z';

        let dayTimestamp = new Date(newString).getTime();
        return dayTimestamp;
    }
}


