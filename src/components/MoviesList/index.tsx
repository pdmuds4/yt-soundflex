import { Grid, GridItem, Button } from "@chakra-ui/react";
import { DownloadIcon, RepeatIcon } from "@chakra-ui/icons";
import MoviesTable from "./MoviesTable";

const MoviesList: React.FC = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
            <GridItem colSpan={1}>
                <Button 
                    w='100%' 
                    size='md'
                    colorScheme="green"
                    rightIcon={<DownloadIcon />}
                    // onClick = {}
                    // isDisabled={}
                >一括ダウンロード</Button>
            </GridItem>
            <GridItem colSpan={1}>
                <Button 
                    w='100%' 
                    size='md'
                    colorScheme="blue"
                    variant='outline'
                    rightIcon={<RepeatIcon />}
                    // onClick = {}
                    // isDisabled={}
                >リセット</Button>
            </GridItem>
            <GridItem colSpan={2}>
                <MoviesTable />
            </GridItem>
        </Grid>
    )
}

export default MoviesList;