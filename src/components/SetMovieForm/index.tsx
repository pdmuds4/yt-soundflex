import { useState } from "react";
import { ChakraProvider, Stack, Grid, GridItem, Button } from "@chakra-ui/react";
import { ArrowDownIcon, RepeatIcon } from "@chakra-ui/icons";

import UrlForm from "./UrlForm";
import Preview from "./Preview";
import SaveNameForm from "./SavenameForm";
import FormatForm from "./FormatForm";

const SetMovieForm: React.FC = () => {
    const [youtube_info, setYoutubeInfo] = useState({});

    return (
        <Stack spacing={4}>
            <UrlForm 
                onSearch={(url)=>console.log(url)} 
                btnIsLoading={false}
            />
            <Preview 
                // title={}
                // thumbnail_src={}
                // channel_name={}
            />
            <SaveNameForm 
                onSetValue={(savename) => console.log(savename)} 
                isDisabled={false}
            />
            <FormatForm 
                onSetValue={(savename) => console.log(savename)} 
                isDisabled={false}
            />
            
            <Grid templateColumns='repeat(1, 1fr)' gap={4}>
                <GridItem>
                    <Button 
                        w='100%' 
                        size='md'
                        colorScheme="red"
                        rightIcon={<ArrowDownIcon />}
                        // onClick = {}
                    >リストに追加</Button>
                </GridItem>
                { // [TODO]親から子内のイベントを発火させる方法を検討
                /* <GridItem>
                    <Button 
                        w='100%' 
                        size='md'
                        colorScheme="red"
                        variant='outline'
                        rightIcon={<RepeatIcon />}
                        // onClick = {}
                    >リセット</Button>
                </GridItem> */}
            </Grid>
        </Stack>
    )
}

export default SetMovieForm;

// const DebugSetMovieForm: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <SetMovieForm />
//         </ChakraProvider>
//     )
// }

// export default DebugSetMovieForm;