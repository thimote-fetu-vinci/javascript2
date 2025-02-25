import express, { ErrorRequestHandler } from "express";
import cors from "cors";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinksRouter from "./routes/drinks";

const app = express();

const corsOptions = {
    origin: [/^http:\/\/localhost/, "http://amazing.you.com"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/drinks", drinksRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
};

app.use(errorHandler);

export default app;
