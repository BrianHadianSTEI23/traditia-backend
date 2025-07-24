import { db } from "../libs/drizzle.js";
import { traditional_song } from "../libs/schema.js";
import type { TraditionalSong } from "../types/traditional-song.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// c
export async function createTraditionalSong(e:TraditionalSong){
    return db.insert(traditional_song).values(e);
}

// r : get all
export async function getAllTraditionalSong() {
    return db.select().from(traditional_song);
}

// r : get by food id
export async function getTraditionalSongByID(id:number){
    return db.select().from(traditional_song).where(eq(traditional_song.id, id));
}

// u : update by hash
export async function updateTraditionalSongByID(id: number, updatedFields: Partial<typeof traditional_song.$inferInsert>) {
    return db
    .update(traditional_song)
    .set(updatedFields)
    .where(eq(traditional_song.id, id));
}

// d : delete by id
export async function deleteArtifactById(id : number){
    return db.delete(traditional_song).where(eq(traditional_song.id, id))
}
