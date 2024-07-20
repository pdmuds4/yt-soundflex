import { ChakraProvider, Button, Tr, Td, Image, Badge, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const MovieTableData: React.FC = () => {
    return (
        <Tr>
            <Td maxW="50px">
                <Button
                    maxW='20px'
                    size='md' 
                    colorScheme="red"
                    // onClick = {}
                >
                    <DeleteIcon/>
                </Button>
            </Td>
            <Td maxW='100px'>
                <Image
                    maxW='80px'
                    borderRadius='md'
                    src={''}
                    alt='youtube sumbnail'
                />
            </Td>
            <Td maxW='150px'>
                <Text 
                    noOfLines={0.5}
                    // onDoubleClick={}
                >
                    {}
                </Text>
            </Td>
            <Td isNumeric>
                <Badge 
                    variant='solid' 
                    colorScheme='green'
                    // onDoubleClick={}
                >
                    {}
                </Badge>
            </Td>
        </Tr>
    );
}

// export default MovieTableData;

const DebugMovieTableData: React.FC = () => {
    return (
        <ChakraProvider>
            <MovieTableData />
        </ChakraProvider>
    );
}

export default DebugMovieTableData;