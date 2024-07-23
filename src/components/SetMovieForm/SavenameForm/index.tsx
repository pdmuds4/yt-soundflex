import { Input } from "@chakra-ui/react";

import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

type SavenameType = ConvertInfoJsonType['savename'];
const SaveNameForm: React.FC<{
    isDisabled: boolean;
    onGetValue: (savename: SavenameType) => void;
}> = (props) => {
    return (
        <Input
            type="text"
            placeholder="保存ファイル名を入力" 
            focusBorderColor='#ff0026'
            onChange={(e)=>props.onGetValue(e.target.value)}
            isDisabled={props.isDisabled}
        />
    )
}

export default SaveNameForm;