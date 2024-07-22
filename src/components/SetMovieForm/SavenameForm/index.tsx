import { Input } from "@chakra-ui/react";

import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

type SavenameType = ConvertInfoJsonType['savename'];
const SaveNameForm: React.FC<{
    defaultValue?: SavenameType;
    isDisabled: boolean;
    onSetValue: (savename: SavenameType) => void;
}> = (props) => {
    return (
        <Input
            defaultValue={props.defaultValue}
            type="text"
            placeholder="保存ファイル名を入力" 
            focusBorderColor='#ff0026'
            onChange={(e)=>props.onSetValue(e.target.value)}
            isDisabled={props.isDisabled}
        />
    )
}

export default SaveNameForm;