import express from "express";

const app = express();

import textsRouter from "./routes/texts";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/texts", textsRouter);

export default app;
