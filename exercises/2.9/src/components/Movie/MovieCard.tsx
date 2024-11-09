import { Movie } from "../../types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {movie.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={movie.imageUrl}
          alt={movie.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Réalisateur :</strong> {movie.director}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Durée :</strong> {movie.duration} minutes
        </Typography>
        {movie.budget && (
          <Typography variant="body2" color="text.secondary">
            <strong>Budget :</strong> {movie.budget} millions de dollars
          </Typography>
        )}
        {movie.description && (
          <Typography variant="body2" color="text.secondary">
            <strong>Description :</strong> {movie.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
