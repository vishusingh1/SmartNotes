import express from "express";
import cors from "cors";

import notesRouter from "./routes/notes.route";
import aiRouter from "./routes/ai.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);
app.use("/api/ai", aiRouter);

export default app;
