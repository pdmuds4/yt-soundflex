import { useState } from 'react';
import { Button, ChakraProvider, Input, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { ConvertInfoJsonType } from '@domain/convert_info/jsonType';

type UrlType = ConvertInfoJsonType['url'];
const SearchForm: React.FC<{
    onSearch: (url: UrlType) => void;
}> = (props) => {
    const errorToast = useToast();
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
                    onClick={() => {
                        try {
                            props.onSearch(input_url);
                        } catch (e: unknown) {
                            errorToast({
                                title: 'エラー',
                                description: e instanceof Error ? e.message : '不明なエラー',
                                status: 'error',
                                duration: 3000,
                                isClosable: true,
                            });
                        }
                    }}
                >検索</Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchForm;

// const DebugSearchForm: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <SearchForm />
//         </ChakraProvider>
//     )
// }

// export default DebugSearchForm;