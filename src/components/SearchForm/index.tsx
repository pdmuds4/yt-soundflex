import { Button, ChakraProvider, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchForm: React.FC = () => {
    return (
        <InputGroup width={{base: '100%', md: '50%'}}>
            <Input 
                placeholder='https://www.youtube.com/...'
                focusBorderColor='#ff0026'
            />
            <InputRightElement width='30%'>
                <Button 
                    colorScheme='red'
                    size='sm'
                    width='90%'
                    rightIcon={<Search2Icon />}
                    // onClick={}
                >検索</Button>
            </InputRightElement>
        </InputGroup>
    )
}

// export default SearchForm;

const DebugSearchForm: React.FC = () => {
    return (
        <ChakraProvider>
            <SearchForm />
        </ChakraProvider>
    )
}

export default DebugSearchForm;