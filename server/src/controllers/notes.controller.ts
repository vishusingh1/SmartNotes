import { Request, Response } from "express";
import { NotesService } from "../services/notes.service";


console.log("NOTES SERVICE:", NotesService);
export const getNotes = async (_req: Request, res: Response) => {
  const notes = await NotesService.getALL();
  res.json(notes);
}



export const createNotes = async(req: Request, res: Response) => {
  const { title, content, summary } = req.body;

  const note = await NotesService.create({ title, content, summary });
  res.status(201).json(note);
};

export const deleteNote = async(req: Request, res: Response) => {
  const id = Number(req.params.id);

  const deleted = await NotesService.delete(id);

  if(!deleted){
    return res.status(404).json({ message: "note not found"});
  };

res.json({message: "Deleted", deleted})

};

export const getOneNote = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const note = await NotesService.getOne(id);

  if(!note){
    return res.status(404).json({ message: "Note not found"});
  }

  res.json(note);
};

export const updateOneNote = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const{ title, content} = req.body;

  const updated = await NotesService.update({ id, title, content});

  if(!updated){
    return res.status(404).json({ message: "Note not found"});
  }
  res.json(updated);
}