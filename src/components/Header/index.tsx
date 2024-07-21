'use client';
import { ChakraProvider, Box, Button, Heading, Img } from '@chakra-ui/react';
import { s__headerBody, s__headerBtn, s__headerIcon } from './style';
// import icon from "public/icon.svg";

const Header: React.FC = () => {
    return (
        <Box sx={s__headerBody}>
            <Button 
                sx={s__headerBtn} 
                variant='ghost'
                colorScheme='blackAlpha'
                // onClick={}
            >
                <Img sx={s__headerIcon} src='icon.svg' />
                <Heading fontSize={{base: 'x-large', sm: 'xx-large'}}>YoutubeSoundFlex</Heading>
            </Button>
        </Box>
    );
}

export default Header;

// const DebugHeader: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <Header />
//         </ChakraProvider>
//     );
// }

// export default DebugHeader;