export default class MovieId {
    private readonly _value: number;

    constructor(value: number) {
        this._value = this.validate(value);
    }

    private validate(value: number): number {
        if (value < 0)                throw new Error('ID must be positive number');
        if (!Number.isInteger(value)) throw new Error('ID must be integer'        );
        if (isNaN(value))             throw new Error('ID must be not NaN'        );
        
        return value;
    }

    get value(): number {
        return this._value;
    }
}