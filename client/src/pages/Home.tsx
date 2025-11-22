import { useEffect, useState } from "react";
import { NotesAPI } from "../api/notes.api";
import type { Note } from "../types/note";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";


export default function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    NotesAPI.getAll().then(setNotes);
  }, []);

  console.log("list of notes:", notes)
  const handleSelectNote = (id: number) => {
    navigate(`/note/${id}`)
  }
  const handleDeleteNote = (id: number) => {
    NotesAPI.delete(id).then(() => {
      setNotes(notes.filter(n => n.id !== id));
    })
  }


  return (
    <div className="p-4 bg-black text-white h-screen">
      <div className=" flex items-center justify-center mt-7 mb-4">
        <div className="">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Smart Notes
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Organize. Summarize. Think smarter with AI-powered notes.
          </p>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <a href="/create">Create Note</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26">
            <path fill="currentColor" d="M22.438-.063c-.375 0-.732.17-1.032.47l-.718.687l4.218 4.218l.688-.718c.6-.6.6-1.494 0-2.094L23.5.406c-.3-.3-.688-.469-1.063-.469zM20 1.688l-1.094.907l4.5 4.5l1-1zm-1.688 1.625l-9.03 8.938a1 1 0 0 0-.126.125l-.062.031a1 1 0 0 0-.219.438l-1.219 4.281a.975.975 0 0 0 1.219 1.219l4.281-1.219a.98.98 0 0 0 .656-.531l8.876-8.782L21 6v.094l-1.188-1.188h.094l-1.593-1.593zM.813 4A1 1 0 0 0 0 5v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 1 0-2 0v10H2V6h10a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm9.813 9.813l1.375.093l.094 1.5l-1.375.406l-.531-.53z" />
          </svg>
        </div>

      </div>


      <div className="grid grid-cols-2 gap-3 auto-cols-fr " style={{ marginTop: 20 }}>
        {notes.map(note => (
            <NoteCard key={note.id} note={note} onSelect={() => handleSelectNote(note.id)} onDelete={() => handleDeleteNote(note.id) } />
        ))}
      </div>
    </div>
  );
}
