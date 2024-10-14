interface HeaderProps {
	title: string;
}

const Header = (props: HeaderProps) => {
	return <h1>{props.title}</h1>;
}

interface CinemaProps {
	name: string;
	movies: { title: string; director: string }[];
}

const Cinema = (props: CinemaProps) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<ul>
				{props.movies.map((movie) => (
					<li>
						<strong>{movie.title}</strong> - Réalisateur : {movie.director}
					</li>
				))}
			</ul>
		</div>
	)
}

const App = () => {
	const pageTitle = "Informations sur les films dans les cinémas";

	const cinema1Name = "UGC DeBrouckère";
	const cinema1Movie1Title = "Film 1 - DeBrouckère";
	const cinema1Movie1Director = "Director A";
	const cinema1Movie2Title = "Film 2 - DeBrouckère";
	const cinema1Movie2Director = "Director B";

	const cinema2Name = "UGC Toison d'Or";
	const cinema2Movie1Title = "Film 1 - Toison d'Or";
	const cinema2Movie1Director = "Director C";
	const cinema2Movie2Title = "Film 2 - Toison d'Or";
	const cinema2Movie2Director = "Director D";

	return (
		<div>
			<Header title={pageTitle} />
			<Cinema
				name={cinema1Name}
				movies={[
					{ title: cinema1Movie1Title, director: cinema1Movie1Director },
					{ title: cinema1Movie2Title, director: cinema1Movie2Director },
				]}></Cinema>
			<Cinema
				name={cinema2Name}
				movies={[
					{ title: cinema2Movie1Title, director: cinema2Movie1Director },
					{ title: cinema2Movie2Title, director: cinema2Movie2Director },
				]}></Cinema>
		</div>
	);
};

export default App;