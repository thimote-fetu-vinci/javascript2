interface MovieProps {
    title: string;
    director: string;
    description: string;
};

const Movie = (props: MovieProps) => {
    return (
        <li key={props.title}>
            <strong>{props.title}</strong> - {props.director} : {props.description}
        </li>
    )
}

export default Movie;