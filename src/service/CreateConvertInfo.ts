import ConvertInfoEntity from "@domain/convert_info/entity";
import { Url } from "@domain/convert_info/value_object";
import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

export default class CreateConvertInfoUseCase {
    static execute(url: ConvertInfoJsonType['url']): ConvertInfoEntity {
        return new ConvertInfoEntity(new Url(url))
    }
}