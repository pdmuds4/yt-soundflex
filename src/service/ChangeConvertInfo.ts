import ConvertInfoEntity from "@domain/convert_info/entity";
import { Url, Format, SaveName } from "@domain/convert_info/value_object";
import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

export default class ChangeConvertInfoUseCase {
    constructor(
        private readonly convert_info: ConvertInfoEntity,
    ){}

    executeForUrl(url: ConvertInfoJsonType['url']) {
        return new ConvertInfoEntity(
            new Url(url), 
            this.convert_info.format,
            this.convert_info.savename
        )
    }

    executeForFormat(format: ConvertInfoJsonType['format']) {
        return new ConvertInfoEntity(
            this.convert_info.url,
            new Format(format),
            this.convert_info.savename
        )
    }

    executeForSaveName(savename: ConvertInfoJsonType['savename']) {
        return new ConvertInfoEntity(
            this.convert_info.url, 
            this.convert_info.format,
            new SaveName(savename)
        )
    }
}