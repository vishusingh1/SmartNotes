import { eq } from "drizzle-orm";
import { db } from "../db/drizzle";
import { notes } from "../db/schema";
import { title } from "process";


export const NotesService = {
  getALL: async () => {
    return await db.select().from(notes);
  },

  getOne: async (id: number) => {
    const result = await db 
    .select()
    .from(notes)
    .where(eq(notes.id, id));

    return result[0];
    
  },

  create: async (data: { title: string; content: string; summary?: string }) => {
    const result = await db.insert(notes).values(data).returning();
    return result[0];
  },

  delete: async (id: number) => {
    const result = await db
      .delete(notes)
      .where(eq(notes.id, id))
      .returning();

    return result[0];
  },


update: async (data : {id: number; title: string; content: string}) => {
  const result = await db.update(notes).set({
    title: data.title,
    content: data.content
  })
  .where(eq(notes.id, data.id))
  .returning();
  return result[0];
}
};
