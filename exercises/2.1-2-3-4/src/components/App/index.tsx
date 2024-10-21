import Footer from "../Footer";
import Header from "../Header";
import Cinema from "../Cinema";
import Movie from "../Movie";

const App = () => {
	return (
		<div>
			<Header title="Informations sur les films dans les cinémas" img="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"/>

			<Cinema name="UGC DeBrouckère" >
				<Movie title="HAIKYU-THE DUMPSTER BATTLE" director="Susumu Mitsunaka" />
				<Movie title="GOODBYE JULIA" director="Mohamed Kordofani" />
				<Movie title="INCEPTION" director="Christopher Nolan" />
				<Movie title="PARASITE" director="Bong Joon-ho" />
			</Cinema>
			<Cinema name="UGC Toison d'Or">
				<Movie title="THE WATCHERS" director="Ishana Night Shyamalan" />
				<Movie title="BAD BOYS: RIDE OR DIE" director="Adil El Arbi, Bilall Fallah" />
				<Movie title="TENET" director="Christopher Nolan" />
				<Movie title="THE IRISHMAN" director="Martin Scorsese" />
			</Cinema>

			<Footer content="© 2024"/>
		</div>
	);
};

export default App;