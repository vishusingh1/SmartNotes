export interface Note {
    id: number;
    title: string;
    content: string;
    summary?: string;
    created_at: string;
}

export interface NoteInput {
    title: string;
    content: string;
    summary?: string;
}