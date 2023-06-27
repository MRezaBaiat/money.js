import { RoundingModes } from 'js-big-decimal/dist/node/roundingModes';
import { RateSource } from '../index';
type CurrenciesType = any;
type AmountType = Money<CurrenciesType> | string | number;
type ExtractedCurrencyType<Amount extends AmountType, Currency extends CurrenciesType> = Currency extends undefined ? Amount extends Money<CurrenciesType> ? ReturnType<Amount['getCurrency']> : undefined : Money<Currency>;
type MaybePromise<Amount extends AmountType, T extends CurrenciesType, MCT extends CurrenciesType, Extracted = ExtractedCurrencyType<Amount, T>> = Extracted extends undefined ? Money<MCT> : Promise<Money<MCT>>;
export declare class Money<MCT extends CurrenciesType = undefined> {
    private amount;
    private currency;
    private readonly immutable;
    static rateSource: RateSource;
    constructor(amount: AmountType, currency?: MCT, immutable?: boolean);
    add<Amount extends AmountType, T extends CurrenciesType = undefined>(amount: Amount, currency?: T): MaybePromise<Amount, T, MCT>;
    subtract<Amount extends AmountType, T extends CurrenciesType = undefined>(amount: Amount, currency?: T): MaybePromise<Amount, T, MCT>;
    multiply<Amount extends AmountType, T extends CurrenciesType = undefined>(amount: Amount, currency?: T): MaybePromise<Amount, T, MCT>;
    divide<Amount extends AmountType, T extends CurrenciesType = undefined>(amount: Amount, currency?: T, precision?: number): MaybePromise<Amount, T, MCT>;
    round(precision?: number, mode?: RoundingModes): Money<MCT>;
    floor(): Money<MCT>;
    value(moneyFormat?: boolean): string;
    convertTo<T extends CurrenciesType>(currency: T, rates?: Record<string, number>): Promise<Money<T>>;
    getCurrency(): MCT;
    compareTo(amount: AmountType): 1 | 0 | -1;
    equals(amount: AmountType): boolean;
    isGreaterThan(amount: AmountType): boolean;
    isGreaterThanOrEqual(amount: AmountType): boolean;
    isLessThan(amount: AmountType): boolean;
    isLessThanOrEqual(amount: AmountType): boolean;
    private static toStringValue;
    isImmutable(): boolean;
    toImmutable(): Money<MCT>;
    toMutable(): Money<MCT>;
    private cloneIfNeeded;
    clone<T extends CurrenciesType = MCT>(overrides?: Partial<{
        amount: string;
        currency: T;
        immutable: boolean;
    }>): Money<T>;
}
export declare const money: <CT extends CurrenciesType = undefined>(amount: AmountType, currency?: CT, immutable?: boolean) => Money<CT>;
export {};