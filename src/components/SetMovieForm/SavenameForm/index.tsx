import { Input } from "@chakra-ui/react";

const SaveNameForm:React.FC = () => {
    return (
        <Input
            type="text"
            // value={}
            placeholder="保存ファイル名を入力" 
            focusBorderColor='#ff0026'
            // onChange={}
        />
    )
}

export default SaveNameForm;