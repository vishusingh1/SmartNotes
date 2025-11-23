import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NotesAPI } from "../api/notes.api";
import type { Note } from "../types/note";
import VantaClouds from "../components/VantaClouds";


export default function Note() {
    const params = useParams();
    const id = params?.id;
    console.log("note id os:", id)
    // const [note, setNote] = useState<Note | null>(null);
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateContent, setUpdateContent] = useState("");
    const [updateSummary, setUpdateSummary] = useState("");


    const updateNote = async () => {
        await NotesAPI.updateOne(Number(id), {
            title: updateTitle,
            content: updateContent,
            summary: updateSummary
        });

        window.location.href = "/";
    };


    useEffect(() => {
        if (!id) return;

        NotesAPI.getOne(Number(id)).then((data) => {
            // setNote(data);
            setUpdateTitle(data.title);
            setUpdateContent(data.content);
            setUpdateSummary(data.summary || "");
        });
    }, [id]);




    return (
        <div className="p-4 bg-black text-white h-screen flex items-center justify-center">
            <div className=" absolute inset-0 z-1"
            >
                <VantaClouds />

            </div>
            <div className="border-2 border-white w-fit p-10 z-10">
                <div id="title" className="flex items-center justify-center mb-1" >
                    <h1 className="text-xl font-bold">Update Your Note</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-lg font-medium">Update Title and Description for your Note</h1>
                        <input
                            value={updateTitle}
                            onChange={e => setUpdateTitle(e.target.value)}
                            placeholder="Title"
                            className="border border-white bg-transparent text-white px-3 py-2 rounded"
                        />

                    </div>

                    <textarea
                        value={updateContent}
                        onChange={e => setUpdateContent(e.target.value)}
                        placeholder="Description"
                        rows={3}
                        className="border border-white bg-transparent text-white px-3 py-2 rounded"
                    />
                </div>
                <div className="flex items-center justify-center cursor-pointer">


                    <button className="cursor-pointer " onClick={updateNote}>
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    )

}