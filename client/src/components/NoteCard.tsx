import type { Note } from "../types/note";

interface NoteCardProps {
  note: Note;
  onSelect: () => void;
  onDelete: () => void;
}

export default function NoteCard({ note, onSelect, onDelete }: NoteCardProps) {
  return (
    <div
     
      style={{
        padding: 15,
        marginBottom: 10,
        border: "1px solid #ccc",
        borderRadius: 6,
      }}
    >
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      {note.summary && (
        <p style={{ fontStyle: "italic", color: "#444" }}>
          Summary: {note.summary}
        </p>
      )}
      <div className="flex items-center justify-end gap-2 cursor-pointer">
        <div onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5" />
          </svg>
        </div>
        <div  onClick={onSelect}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="#fff" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z" />
          </svg>

        </div>

      </div>
    </div>
  );
}
