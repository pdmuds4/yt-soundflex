export default class MovieUrl {
    private readonly _value: string;

    constructor(value: string) {
        this._value = this.validate(value);
    }

    // APIでバリデーションチェックを行なっているが、二重にかけておく
    private validate(value: string): string {
        if (!value.includes('youtube.com'))  throw new Error('MovieUrl must contain [youtube.com]');
        if (!value.includes('youtu.be'))     throw new Error('MovieUrl must contain [youtu.be]');
        
        return value;
    }

    get value(): string {
        return this._value;
    }
}