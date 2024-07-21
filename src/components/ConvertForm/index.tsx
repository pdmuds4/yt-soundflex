import { ChakraProvider, Stack, Input, Select, Grid, GridItem, Button } from "@chakra-ui/react";
import { ArrowDownIcon, RepeatIcon } from "@chakra-ui/icons";

const ConvertForm: React.FC = () => {
    return (
        <Stack spacing={4}>
            <Input
                type="text"
                // value={}
                placeholder="保存ファイル名を入力" 
                focusBorderColor='#ff0026'
                // onChange={}
            />
            <Select 
                placeholder="保存フォーマットを選択"
                focusBorderColor='#ff0026'
                // onChange={}
            >
                <option value='mp3'>mp3</option>
                <option value='ogg'>ogg</option>
                <option value='wav'>wav</option>
                <option value='mp4a'>mp4a</option>
            </Select>
            <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem>
                    <Button 
                        w='100%' 
                        size='md'
                        colorScheme="red"
                        rightIcon={<ArrowDownIcon />}
                        // onClick = {}
                    >リストに追加</Button>
                </GridItem>
                <GridItem>
                    <Button 
                        w='100%' 
                        size='md'
                        colorScheme="red"
                        variant='outline'
                        rightIcon={<RepeatIcon />}
                        // onClick = {}
                    >リセット</Button>
                </GridItem>
            </Grid>
        </Stack>
    )
}

export default ConvertForm;

// const DebugConvertForm: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <ConvertForm />
//         </ChakraProvider>
//     )
// }

// export default DebugConvertForm;