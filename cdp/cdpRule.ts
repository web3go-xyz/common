
import { BigNumber } from "bignumber.js";
export class CDPRule { 
    static debitScale: BigNumber = new BigNumber('1e13');
    static collateralScale: BigNumber = new BigNumber('1e12');
    static STEP: number = 10;

    requiredRatio: number;
    liquidationRatio: number;
    liquidationPenaltyRatio: number;

    constructor(requiredRatio: number, liquidationRatio: number, liquidationPenaltyPercentage: number) {
        this.requiredRatio = requiredRatio;
        this.liquidationRatio = liquidationRatio;
        this.liquidationPenaltyRatio = liquidationPenaltyPercentage;

    }
    static formatDebit(debit: any) {
        let debitBig = new BigNumber(debit);
        let debitAmount = debitBig.div(CDPRule.debitScale);
        return debitAmount.toNumber();
    }
    static formatCollateral(collateral: any) {
        let collateralBig = new BigNumber(collateral);
        let collateralAmount = collateralBig.div(CDPRule.collateralScale);
        return collateralAmount.toNumber();
    }
    getLoanRatioPercentage(collateral: any, price: number, debit: any): number {
        let collateralBig = new BigNumber(collateral);
        let debitBig = new BigNumber(debit);
        if (debitBig.eq(0)) {
            return 0;
        }
        let collateralAmount = collateralBig.div(CDPRule.collateralScale);
        //console.log('collateralAmount:', collateralAmount);

        let collateralValue = collateralAmount.multipliedBy(price);
        //console.log('collateralValue:', collateralValue);

        let debitAmount = debitBig.div(CDPRule.debitScale);
        //console.log('debitAmount:', debitAmount);

        let debitVaue = debitAmount.multipliedBy(1);
        //console.log('debitVaue:', debitVaue);

        let ratio = collateralValue.div(debitVaue).multipliedBy(100);
        //console.log('ratio:', ratio);

        return ratio.toNumber();

    }

    getLoanStatus(currentRatio: number): string {

        let status = this.calculateLoanStatus(currentRatio, this.requiredRatio, this.liquidationRatio);

        return status;
    }
    calculateLoanStatus(currentRatio: number, requiredRatio: number, liquidationRatio: number): string {
        if (currentRatio == 0) return LOAN_STATUS.SAFE;

        // if current ratio is greater than (required ratio + 10%), the loan status is safe;
        if (currentRatio >= (requiredRatio + (CDPRule.STEP))) {
            return LOAN_STATUS.SAFE;
        }

        // if current ratio is less than (required ratio + 10%) and greater than (liqudation ratio + 10%), the loan status is waring
        if (currentRatio < (requiredRatio + (CDPRule.STEP)) && currentRatio >= (liquidationRatio + (CDPRule.STEP))) {
            return LOAN_STATUS.WARNING;
        }
        // if current ratio is less than (liquidation ratio + 10%), the loan status is danger;
        return LOAN_STATUS.DANGER;
    };
}
export class LOAN_STATUS {
    static SAFE: string = 'Safe';
    static WARNING: string = 'Warning';
    static DANGER: string = 'Danger';
}