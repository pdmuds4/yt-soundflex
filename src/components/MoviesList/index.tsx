'use client';
import { useRef, useState, useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

import { Grid, GridItem, Button } from "@chakra-ui/react";
import { DownloadIcon, RepeatIcon } from "@chakra-ui/icons";

import MoviesTable from "./MoviesTable";
import MovieTableData from "./MovieTableData";

import MovieRepository from "@domain/movie/repository";
import MovieEntity from "@domain/movie/entity";
import { MovieJsonType } from "@domain/movie/jsonType";
import { ConvertInfoJsonType } from "@domain/convert_info/jsonType";

import{ GetConvertedUrlUseCase } from "@usecase";

const MoviesList: React.FC<{
    movies_data: MovieRepository;
    onReset:  () => void;
    onDelete: (id: MovieJsonType['id']) => void;
}> = (props) => {
    // const [download_info, setDlInfo] = useState<{src: string, savename: string}[]>([]);
    const downloadRef = useRef<HTMLAnchorElement>(null);
    const ffmpegRef = useRef(new GetConvertedUrlUseCase(new FFmpeg()));

    useEffect(
        () => {
            (async () => {
                const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
                const ffmpeg = ffmpegRef.current.ffmpeg_instance;
                ffmpeg.on('progress', ({ progress, time }) => {
                    console.log(progress, time);
                });
                await ffmpeg.load({
                    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm')
                });
            })();
        },[]
    )

    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
            <GridItem colSpan={1}>
                <Button 
                    w='100%' 
                    size='md'
                    colorScheme="green"
                    rightIcon={<DownloadIcon />}
                    onClick = {() => {
                        Promise.all(
                            props.movies_data.getAll().map(async (movie)=> {
                                const dl_src = await ffmpegRef.current.execute(movie.convertInfo)
                                if (downloadRef.current) {
                                    downloadRef.current.href = dl_src;
                                    downloadRef.current.download = movie.convertInfo.savename?.value as ConvertInfoJsonType['savename'];
                                    downloadRef.current.click();
                                }
                            })
                        )
                    }}
                    isDisabled={props.movies_data.isEmpty()}
                >ダウンロード</Button>
                <a  
                    ref={downloadRef}
                    hidden
                ></a>
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
                <a hidden></a>
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