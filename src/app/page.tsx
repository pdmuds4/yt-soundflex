"use client";
import { useState } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Header, SetMovieForm, MoviesList } from '@component';

import MovieId from '@domain/movie/_id';
import MovieRepository from '@domain/movie/repository';
import { CreateMovieUseCase } from '@usecase';
import MovieEntity from '@domain/movie/entity';

const Index: React.FC = () => {
	const [movies, moviesSet] = useState<MovieRepository>(new MovieRepository([]));


	return (
		<>
			<Header />
			<Box 
				sx={{padding: '20vh 5vw 0 5vw'}} 
				overflowX={{base: 'scroll', sm: 'hidden'}}
			>	
				<Grid 
					templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} 
					gap={5}
				>
					<GridItem>
						<SetMovieForm 
							onGetMovieEntity={(youtube_info, convert_info) => {
								const new_id = new MovieId(movies.getLastId()+1)
								moviesSet(
									movies.save(new MovieEntity(new_id, youtube_info, convert_info))
								)
							}
						} />
					</GridItem>
					<GridItem>
						<MoviesList />
					</GridItem>
				</Grid>
			</Box>
		</>
	);
}

export default Index;
