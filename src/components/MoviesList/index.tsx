import { Grid, GridItem, Button } from "@chakra-ui/react";
import { DownloadIcon, RepeatIcon } from "@chakra-ui/icons";

import MoviesTable from "./MoviesTable";
import MovieTableData from "./MovieTableData";

import MovieRepository from "@domain/movie/repository";
import MovieEntity from "@domain/movie/entity";
import { MovieJsonType } from "@domain/movie/jsonType";
import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

const MoviesList: React.FC<{
    movies_data: MovieRepository;
    onReset:  () => void;
    onDelete: (id: MovieJsonType['id']) => void;
}> = (props) => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
            <GridItem colSpan={1}>
                <Button 
                    w='100%' 
                    size='md'
                    colorScheme="green"
                    rightIcon={<DownloadIcon />}
                    // onClick = {}
                    isDisabled={props.movies_data.isEmpty()}
                >ダウンロード</Button>
            </GridItem>
            <GridItem colSpan={1}>
                <Button 
                    w='100%' 
                    size='md'
                    colorScheme="blue"
                    variant='outline'
                    rightIcon={<RepeatIcon />}
                    onClick = {props.onReset}
                    isDisabled={props.movies_data.isEmpty()}
                >リセット</Button>
            </GridItem>
            <GridItem colSpan={2}>
                <MoviesTable>
                    { props.movies_data ? 
                        props.movies_data.getAll().map((movie: MovieEntity) => 
                        <MovieTableData 
                            key           = {movie.id}
                            thumbnail_src = {movie.youtubeInfo.thumbnail_src}
                            savename      = {movie.convertInfo.savename?.value as ConvertInfoJsonType['savename']}
                            format        = {movie.convertInfo.format?.value   as ConvertInfoJsonType['format']}
                            onDelete      = {() => props.onDelete(movie.id)}
                        />
                    ) :     
                        <></>
                    }
                </MoviesTable>
            </GridItem>
        </Grid>
    )
}

export default MoviesList;