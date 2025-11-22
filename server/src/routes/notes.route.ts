import { Router } from "express";
import { getNotes, createNotes, deleteNote, getOneNote, updateOneNote } from "../controllers/notes.controller";

const router = Router();

router.get("/", getNotes);
router.post("/", createNotes);
router.delete("/:id", deleteNote);
router.get("/:id", getOneNote);
router.put("/:id", updateOneNote);


export default router;
