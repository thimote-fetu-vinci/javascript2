import { ReactElement } from "react";
import Movie from "../Movie";


interface CinemaProps {
	name: string;
	children: ReactElement<typeof Movie>[];
}

const Cinema = (props: CinemaProps) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<ul>{props.children}</ul>
		</div>
	);
}

export default Cinema;