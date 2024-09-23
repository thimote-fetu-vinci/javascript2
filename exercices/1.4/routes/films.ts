import { Router } from "express";
import { Film, NewFilm } from "../types";

const router = Router();

const defaultFilms: Film[] = [
	{
		id: 1,
		title: "Jurassic Park",
		director: "Steven Spielberg",
		duration: 127,
		budget: 63000000,
		description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
		imageUrl: "https://image.url/jurassicpark.jpg"
	},
	{
		id: 2,
		title: "Harry Potter and the Philosopher's Stone",
		director: "Chris Columbus",
		duration: 152,
		budget: 125000000,
		description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
		imageUrl: "https://image.url/harrypotter.jpg"
	},
	{
		id: 3,
		title: "Star Wars: Episode I - The Phantom Menace",
		director: "George Lucas",
		duration: 136,
		budget: 115000000,
		description: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to reclaim their old glory.",
		imageUrl: "https://image.url/starwars.jpg"
	}
];

router.get("/error", (_req, _res, _next) => {
	throw new Error("This is an error");
	// equivalent of next(new Error("This is an error"));
});

/* Read all the films from the list
	GET /films?order=title : ascending order by title
	GET /films?order=-title : descending order by title
*/
router.get("/", (req, res) => {
	if (req.query.order && typeof req.query.order !== "string") {
		return res.sendStatus(400);
	}

	if (req.query["minimum-duration"] && typeof req.query["minimum-duration"] !== "string") {
		return res.sendStatus(400);
	}

	if (req.query.search && typeof req.query.search !== "string") {
		return res.sendStatus(400);
	}

	const orderBy =
		typeof req.query.order === "string" && (
			req.query.order.includes("title") || req.query.order.includes("-title") ||
			req.query.order.includes("director") || req.query.order.includes("-director") ||
			req.query.order.includes("duration") || req.query.order.includes("-duration") ||
			req.query.order.includes("budget") || req.query.order.includes("-budget") ||
			req.query.order.includes("description") || req.query.order.includes("-description") ||
			req.query.order.includes("imageUrl") || req.query.order.includes("-imageUrl"))
			? req.query.order
			: undefined;

	const minimumDuration =
		typeof req.query["minimum-duration"] === "string" && !isNaN(parseInt(req.query["minimum-duration"])) ? parseInt(req.query["minimum-duration"]) : undefined;

	const searchedFilms = typeof req.query.search === "string" ? req.query.search : undefined;

	let orderedFilms: Film[] = [...defaultFilms];
	let listFilms: Film[] = [];
	if (orderBy) {
		if (orderBy.startsWith("-")) {
			const order = orderBy.slice(1);
			orderedFilms = orderedFilms.sort((a, b) => {
				const aValue = a[order as keyof Film];
				const bValue = b[order as keyof Film];
				if (typeof aValue === "number" && typeof bValue === "number") {
					return bValue - aValue;
				} else {
					return (aValue as string).localeCompare(bValue as string);
				}
			});
		} else {
			orderedFilms = orderedFilms.sort((a, b) => {
				const aValue = a[orderBy as keyof Film];
				const bValue = b[orderBy as keyof Film];
				if (typeof aValue === "number" && typeof bValue === "number") {
					return aValue - bValue;
				} else {
					return (aValue as string).localeCompare(bValue as string);
				}
			});
		}
	} else if (minimumDuration) {
		listFilms = defaultFilms.filter(film => film.duration >= minimumDuration);
	} else if (searchedFilms) {
		listFilms = defaultFilms.filter(film => film.title.toLowerCase().includes(searchedFilms.toLowerCase()));
	}

	if (orderBy) {
		return res.json(orderedFilms);
	} else if (minimumDuration || searchedFilms) {
		return res.json(listFilms);
	} else {
		return res.json(defaultFilms);
	}
});

router.get("/:id", (req, res) => {
	res.json(defaultFilms.find(film => film.id === parseInt(req.params.id)));
});

router.post("/", (req, res) => {
	const body: unknown = req.body;
	if (
		!body ||
		typeof body !== "object" ||
		!("title" in body) ||
		!("director" in body) ||
		!("duration" in body) ||
		typeof body.title !== "string" ||
		typeof body.director !== "string" ||
		typeof body.duration !== "number" ||
		!body.title.trim() ||
		!body.director.trim() ||
		body.duration <= 0
	) {
		return res.sendStatus(400);
	}

	const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

	const nextId =
		defaultFilms.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

	const newFilm: Film = {
		id: nextId,
		title,
		director,
		duration,
		budget,
		description,
		imageUrl
	};

	defaultFilms.push(newFilm);
	return res.json(newFilm);
});

export default router;