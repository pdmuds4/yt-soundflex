import { Select } from "@chakra-ui/react";
import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

type FormatType = ConvertInfoJsonType['format'];
const FormatForm:React.FC<{
    isDisabled: boolean;
    onSetValue: (savename: FormatType) => void;
}> = (props) => {
    return (
        <Select
            defaultValue={''}
            focusBorderColor='#ff0026'
            onChange={(e)=>props.onSetValue(e.target.value as FormatType)}
            isDisabled={props.isDisabled}
        >
            <option value='' hidden>保存フォーマットを選択</option>
            <option value='mp3'>mp3</option>
            <option value='ogg'>ogg</option>
            <option value='wav'>wav</option>
            <option value='mp4a'>mp4a</option>
        </Select>
    )
}

export default FormatForm;