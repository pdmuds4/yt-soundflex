export default class ConvertInfoUrl {
    private readonly _value: string;

    constructor(value: string) {
        this._value = this.validate(value);
    }

    // APIでバリデーションチェックを行なっているが、二重にかけておく
    // API側はそのURLが存在するかまでを確認している
    private validate(value: string): string {
        const is_youtube_url = value.includes('youtube.com') || value.includes('youtu.be')
        if (!is_youtube_url)  throw new Error('ConvertInfoUrl must contain [youtube.com] or [youtu.be]');

        return value;
    }

    get value(): string {
        return this._value;
    }
}