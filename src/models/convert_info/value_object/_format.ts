export default class ConvertInfoFormat {
    private readonly _value: 'mp3'| 'ogg' | 'wav' | 'mp4a';

    constructor(value: 'mp3'| 'ogg' | 'wav' | 'mp4a') {
        this._value = value;
    }

    get value(): 'mp3'| 'ogg' | 'wav' | 'mp4a' {
        return this._value;
    }
}