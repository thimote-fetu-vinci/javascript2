import { SyntheticEvent, useState } from "react";

import { Movie } from "../../types";
import { Button, Container, TextField, Typography } from "@mui/material";

interface AddMovieFormProps {
	onMovieAdded: (movie: Movie) => void;
}

const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
	const [title, setTitle] = useState("");
	const [director, setDirector] = useState("");
	const [duration, setDuration] = useState(0);
	const [imageUrl, setImageUrl] = useState("");
	const [description, setDescription] = useState("");
	const [budget, setBudget] = useState(0);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		onMovieAdded({ title, director, duration, imageUrl, description, budget });
		setTitle("");
		setDirector("");
		setDuration(0);
		setImageUrl("");
		setDescription("");
		setBudget(0);
	};
	return (
		<Container
			sx={{
				marginTop: 2,
				padding: 3,
				borderRadius: 4,
				boxShadow: 2,
				width: "400px",
				height: "600px",
			}}
		>
			<form onSubmit={handleSubmit}>
				<div>
					<TextField
						label="Titre"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						fullWidth
						margin="normal"
					/>
				</div>
				<div>
					<TextField
						label="Réalisateur"
						value={director}
						onChange={(e) => setDirector(e.target.value)}
						required
						fullWidth
						margin="normal"
					/>
				</div>
				<div>
					<TextField
						label="Durée"
						type="number"
						inputProps={{ min: 0 }}
						value={duration}
						onChange={(e) => setDuration(Number(e.target.value))}
						required
						fullWidth
						margin="normal"
					/>
				</div>
				<div>
					<TextField
						label="URL de l'image"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
						fullWidth
						margin="normal"
					/>
				</div>
				<div>
					<TextField
						label="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
						fullWidth
						margin="normal"
					/>
				</div>
				<div>
					<TextField
						label="Budget"
						type="number"
						inputProps={{ min: 1000000 }}
						value={budget}
						onChange={(e) => setBudget(Number(e.target.value))}
						required
						fullWidth
						margin="normal"
					/>
				</div>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Ajouter le film
				</Button>
				<Typography color="primary" margin="18px 0">
					*Champs obligatoires
				</Typography>
			</form>
		</Container>
	);
};

export default AddMovieForm;