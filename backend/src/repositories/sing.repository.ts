import { db } from "../libs/drizzle.js";
import { sings } from "../libs/schema.js";
import type { Sings } from "../types/sing.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// c
export async function createSings(e:Sings){
    return db.insert(sings).values(e);
}

// r : get all
export async function getAllSings() {
    return db.select().from(sings);
}

// r : get by food id
export async function getSingsBySongID(id:number){
    return db.select().from(sings).where(eq(sings.traditional_song_id, id));
}

// r : get by food id
export async function getSingsByEthnicID(ethnic_id:number){
    return db.select().from(sings).where(eq(sings.ethnic_group_id, ethnic_id));
}

// u : update by hash
export async function updateSingsByEthnicID(id: number, updatedFields: Partial<typeof sings.$inferInsert>) {
    return db
    .update(sings)
    .set(updatedFields)
    .where(eq(sings.ethnic_group_id, id));
}

// u : update by hash
export async function updateSingsByTraditionalHouseID(id: number, updatedFields: Partial<typeof sings.$inferInsert>) {
    return db
    .update(sings)
    .set(updatedFields)
    .where(eq(sings.traditional_song_id, id));
}

// d : delete by id
export async function deleteArtifactByTraditionalSongId(id : number){
    return db.delete(sings).where(eq(sings.traditional_song_id, id))
}

// d : delete by id
export async function deleteArtifactByEthnicId(id : number){
    return db.delete(sings).where(eq(sings.ethnic_group_id, id))
}

