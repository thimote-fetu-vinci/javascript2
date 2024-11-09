import MovieCard from "../Movie/MovieCard";
import { Movie } from "../../types";
import Box from "@mui/material/Box";

interface MovieListViewProps {
  movies: Movie[];
}

const MovieListView = ({ movies }: MovieListViewProps) => {
  return (
    <Box>
      <Box component="ul" sx={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {movies.map((movie) => (
          <Box component="li" key={movie.title} sx={{ flex: '1 1 calc(33.333% - 16px)', boxSizing: 'border-box' }}>
            <MovieCard movie={movie} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieListView;
