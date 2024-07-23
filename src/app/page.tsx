"use client";
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Header, SetMovieForm, MoviesList } from '@component';

const Index: React.FC = () => {
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
						<SetMovieForm onGetMovieEntity={(movie) => console.log(movie.json())} />
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
