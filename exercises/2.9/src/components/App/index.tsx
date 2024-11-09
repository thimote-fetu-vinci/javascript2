import React from 'react';
import { Typography, Box } from '@mui/material';
import AddMovieForm from "../Movie/AddMovieForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MovieListView from "../Movie";
import PageTitle from "../Header/PageTitle";
import { Movie } from "../../types";

const App = () => {
	const defaultMovies: Movie[] = [
		{
			title: "Shang-Chi and the Legend of the Ten Rings",
			director: "Destin Daniel Cretton",
			duration: 132,
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
			description:
				"Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
			budget: 150,
		},
		{
			title: "The Matrix",
			director: "Lana Wachowski, Lilly Wachowski",
			duration: 136,
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
			description:
				"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
			budget: 63,
		},
		{
			title: "Summer Wars",
			director: "Mamoru Hosoda",
			duration: 114,
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
			description:
				"A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
			budget: 18.7,
		},
		{
			title: "The Meyerowitz Stories",
			director: "Noah Baumbach",
			duration: 112,
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
			description:
				"An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
		},
		{
			title: "her",
			director: "Spike Jonze",
			duration: 126,
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
			description:
				"In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
			budget: 23,
		},
	];

	const [movies, setMovies] = React.useState(defaultMovies);

	const onMovieAdded = (newMovie: Movie) => {
		setMovies([...movies, newMovie]);
	};

	return (
		<Box>
			<Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
				<Typography variant="h1">Tous sur les films</Typography>
			</Header>

			<Box component="main" className="page-content">
				<PageTitle title="My favorite movies" />

				<MovieListView movies={movies} />

				<AddMovieForm onMovieAdded={onMovieAdded} />

				<Box mt={4} />
			</Box>

			<Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
				<Typography variant="body1">© myMovies</Typography>
			</Footer>
		</Box>
	);
};

export default App;
