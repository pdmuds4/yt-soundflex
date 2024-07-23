'use client';
import { useState } from "react";
import { ChakraProvider, Stack, Grid, GridItem, Button, useToast } from "@chakra-ui/react";
import { ArrowDownIcon, RepeatIcon } from "@chakra-ui/icons";

import UrlForm from "./UrlForm";
import Preview from "./Preview";
import SaveNameForm from "./SavenameForm";
import FormatForm from "./FormatForm";

import YoutubeInfoEntity from "@domain/youtube_info/entity";
import ConvertInfoEntity from "@domain/convert_info/entity";
import { SearchForYoutubeUseCase, CreateConvertInfoUseCase, ChangeConvertInfoUseCase } from "@usecase";
const SetMovieForm: React.FC = () => {
    const errorToast = useToast();
    const [youtube_info, setYoutubeInfo] = useState<YoutubeInfoEntity>();
    const [convert_info, setConvertInfo] = useState<ConvertInfoEntity>();

    return (
        <Stack spacing={4}>
            <UrlForm 
                onSearch={
                    async (url) => {
                        new SearchForYoutubeUseCase({url}).execute()
                            .then(resultYoutubeInfo => {
                                setYoutubeInfo(resultYoutubeInfo)
                                setConvertInfo(CreateConvertInfoUseCase.execute(url));
                            }).catch(e => {
                                errorToast({
                                    title: 'エラー:動画情報の取得に失敗しました',
                                    description: e instanceof Error ? e.message : '原因不明のエラー',
                                    status: 'error',
                                    duration: 5000,
                                    isClosable: true,
                                });
                                console.error(e);
                            });
                    }
                }
                btnIsLoading={false}
            />
            <Preview 
                title        ={youtube_info?.title}
                thumbnail_src={youtube_info?.thumbnail_src}
                channel_name ={youtube_info?.channel_name}
            />
            <SaveNameForm
                onGetValue={(savename) => {
                    if (convert_info) 
                        setConvertInfo(
                            new ChangeConvertInfoUseCase(convert_info)
                                .executeForSaveName(savename)
                        )
                    }} 
                isDisabled={!Boolean(youtube_info)}
            />
            <FormatForm 
                onGetValue={(format) => {
                    if (convert_info) 
                        setConvertInfo(
                            new ChangeConvertInfoUseCase(convert_info)
                                .executeForFormat(format)
                        )
                    }} 
                isDisabled={!Boolean(youtube_info)}
            />
            
            <Grid templateColumns='repeat(1, 1fr)' gap={4}>
                <GridItem>
                    <Button 
                        w='100%' 
                        size='md'
                        colorScheme="red"
                        rightIcon={<ArrowDownIcon />}
                        // onClick = {}
                        isDisabled={Boolean(!convert_info || convert_info?.inUndefined())}
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