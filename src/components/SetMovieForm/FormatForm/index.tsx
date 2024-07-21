import { Select } from "@chakra-ui/react";

const FormatForm:React.FC = () => {
    return (
        <Select 
            placeholder="保存フォーマットを選択"
            focusBorderColor='#ff0026'
            // onChange={}
        >
            <option value='mp3'>mp3</option>
            <option value='ogg'>ogg</option>
            <option value='wav'>wav</option>
            <option value='mp4a'>mp4a</option>
        </Select>
    )
}

export default FormatForm;