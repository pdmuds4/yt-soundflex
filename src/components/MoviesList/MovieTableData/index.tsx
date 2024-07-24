import { ChakraProvider, Button, Tr, Td, Image, Badge, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { YoutubeInfoJsonType } from "@domain/youtube_info/jsonType";
import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

const MovieTableData: React.FC<{
    thumbnail_src: YoutubeInfoJsonType['thumbnail_src'];
    savename: ConvertInfoJsonType['savename'];
    format: ConvertInfoJsonType['format'];
    onDelete: () => void;
    // onEdit: () => void;
}> = (props) => {
    return (
        <Tr 
            // [TODO] 編集モードを有効にする
            // onDoubleClick={null} 
        >
            <Td maxW="50px">
                <Button
                    maxW='20px'
                    size='md' 
                    colorScheme="red"
                    onClick = {props.onDelete}
                >
                    <DeleteIcon/>
                </Button>
            </Td>
            <Td maxW='100px'>
                <Image
                    maxW='80px'
                    borderRadius='md'
                    src={props.thumbnail_src}
                    alt='youtube sumbnail'
                />
            </Td>
            <Td maxW='150px'>
                <Text 
                    noOfLines={0.5}
                >
                    {props.savename}
                </Text>
            </Td>
            <Td maxW='50px' isTruncated>
                <Badge 
                    size='lg'
                    variant='solid' 
                    colorScheme='green'
                >
                    {props.format}
                </Badge>
            </Td>
        </Tr>
    );
}

export default MovieTableData;

// const DebugMovieTableData: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <MovieTableData />
//         </ChakraProvider>
//     );
// }

// export default DebugMovieTableData;