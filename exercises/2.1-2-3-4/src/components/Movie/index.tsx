interface MovieProps {
    title: string;
    director: string;
};

const Movie = (props: MovieProps) => {
    return (
        <li key={props.title}>
            <strong>{props.title}</strong> - {props.director}
        </li>
    )
}

export default Movie;