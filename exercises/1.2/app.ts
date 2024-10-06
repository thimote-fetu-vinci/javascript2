import express from "express";

import filmsRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let GetCounter = 0;
let GetCounterFilms = 0;
let PostCounterFilms = 0;
let DeleteCounterFilms = 0;

app.use((_req, _res, next) => {
    if (_req.method === "GET" && _req.originalUrl === "/") {
        GetCounter++;
    } else if (_req.method === "GET" && _req.originalUrl === "/films") {
        GetCounterFilms++;
    } else if (_req.method === "POST") {
        PostCounterFilms++;
    } else if (_req.method === "DELETE") {
        DeleteCounterFilms++;
    }

    console.log(_req.originalUrl);

    console.log(`Request counter : \n - GET / : ${GetCounter}\n - GET /films : ${GetCounterFilms}\n - POST /films : ${PostCounterFilms}\n - DELETE /films: ${DeleteCounterFilms}`);

    next();
});

app.use("/films", filmsRouter);

export default app;
