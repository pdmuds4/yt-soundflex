import { Button, ChakraProvider, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { s__searchBtn } from "./style";

const SearchForm: React.FC = () => {
    return (
        <InputGroup width={{base: '100%', md: '50%'}}>
            <Input placeholder='https://www.youtube.com/...' />
            <InputRightElement sx={s__searchBtn}>
                <Button 
                    colorScheme='red' 
                    width={'100%'}
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