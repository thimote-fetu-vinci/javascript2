import { Router } from "express";
import Film from "../types";

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

  const orderByTitle =
    typeof req.query.order === "string" && req.query.order.includes("title")
      ? req.query.order
      : undefined;

  let orderedFilms: Film[] = [...defaultFilms];
  if (orderByTitle)
    orderedFilms = orderedFilms.sort((a, b) => a.title.localeCompare(b.title));

  if (orderByTitle === "-title") orderedFilms = orderedFilms.reverse();

  return res.json(orderedFilms);
});

export default router;