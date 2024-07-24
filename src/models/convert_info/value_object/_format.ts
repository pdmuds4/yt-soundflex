import { ConvertInfoJsonType } from "../jsonType";

export default class ConvertInfoFormat {
    private readonly _value: ConvertInfoJsonType['format'];

    constructor(value: ConvertInfoJsonType['format']) {
        this._value = value;
    }

    get value(): ConvertInfoJsonType['format'] {
        return this._value;
    }
}