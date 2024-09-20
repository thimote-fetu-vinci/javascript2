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

router.get("/films", (req, res) => {
  res.json(defaultFilms);
});

export default router;