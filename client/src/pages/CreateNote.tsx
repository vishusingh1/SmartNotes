import { useState } from "react";
import { NotesAPI } from "../api/notes.api";
import { AIAPI } from "../api/ai.api";
import VantaClouds from "../components/VantaClouds";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");

  const generateSummary = async () => {
    const response = await AIAPI.summarize(content);
    setSummary(response.summary);
  };

  const saveNote = async () => {
    await NotesAPI.create({ title, content, summary });
    window.location.href = "/";
  };

  return (
    <div className="p-4 bg-black text-white h-screen flex items-center justify-center">
      <div className=" absolute inset-0 z-1" 
      >
        <VantaClouds/>

      </div>
      <div className="border-2 border-white w-fit p-10 z-10">
        <div id="title" className="flex items-center justify-center mb-1" >
          <h1 className="text-xl font-bold">Create Note</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-lg font-medium">Title and Description for your Note</h1>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              className="border border-white bg-transparent text-white px-3 py-2 rounded"
            />

          </div>

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Description"
            rows={3}
             className="border border-white bg-transparent text-white px-3 py-2 rounded"
          />
        </div>
        <div className="flex items-center justify-around cursor-pointer">
        <button onClick={generateSummary}>✨Summary</button>

        {summary && (
          <div style={{ marginTop: 10, padding: 10, background: "#eee" }}>
            <strong>Summary:</strong> {summary}
          </div>
        )}

        <button onClick={saveNote} >
          Save Note
        </button>
        </div>
      </div>
    </div>
  );
}
