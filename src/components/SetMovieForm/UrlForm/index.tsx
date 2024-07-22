import { useState } from 'react';
import { Button, ChakraProvider, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { ConvertInfoJsonType } from '@domain/convert_info/jsonType';

type UrlType = ConvertInfoJsonType['url'];
const UrlForm: React.FC<{
    onSearch: (url: UrlType) => void;
    btnIsLoading: boolean;
}> = (props) => {
    const [input_url, setInputValue] = useState<UrlType>('');

    return (
        <InputGroup>
            <Input 
                placeholder='https://www.youtube.com/...'
                focusBorderColor='#ff0026'
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <InputRightElement width='30%'>
                <Button 
                    colorScheme='red'
                    size='sm'
                    width='90%'
                    rightIcon={<Search2Icon />}
                    isDisabled={input_url === ''}
                    onClick={() => props.onSearch(input_url)}
                    isLoading={props.btnIsLoading}
                    loadingText='検索中...'
                >検索</Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default UrlForm;

// const DebugUrlForm: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <UrlForm />
//         </ChakraProvider>
//     )
// }

// export default DebugUrlForm;