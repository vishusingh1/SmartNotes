import { apiDelete, apiGet, apiGetOne, apiPost, apiUpdate } from "./apiClient";
import type { NoteInput } from "../types/note";
// import { data } from "react-router-dom";

export const NotesAPI = {
  getAll: () => apiGet("/notes"),
  getOne: (id: number) => apiGetOne(`/notes/${id}`),
  create: (data: NoteInput) => apiPost("/notes", data),
  delete: (id: number) => apiDelete(`notes/${id}`),
  updateOne: (id: number, data: NoteInput) => apiUpdate(`notes/${id}`, data)
};
