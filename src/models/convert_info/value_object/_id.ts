export default class ConvertInfoId {
    private readonly _value: number;

    constructor(value: number) {
        this._value = this.validate(value);
    }

    private validate(value: number): number {
        if (value < 0)                throw new Error('ConvertInfoId must be positive number');
        if (!Number.isInteger(value)) throw new Error('ConvertInfoId must be integer'        );
        if (isNaN(value))             throw new Error('ConvertInfoId must be not NaN'        );
        if (isFinite(value))          throw new Error('ConvertInfoId must be not infinite'   );
        
        return value;
    }

    get value(): number {
        return this._value;
    }
}