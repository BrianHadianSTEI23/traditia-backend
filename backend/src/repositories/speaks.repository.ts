import { db } from "../libs/drizzle.js";
import { speaks } from "../libs/schema.js";
import type { Speaks } from "../types/speaks.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// c
export async function createSpeaks(e:Speaks){
    return db.insert(speaks).values(e);
}

// r : get all
export async function getAllSpeaks() {
    return db.select().from(speaks);
}

// r : get by food id
export async function getSpeaksByLanguageID(id:number){
    return db.select().from(speaks).where(eq(speaks.language_id, id));
}

// r : get by food id
export async function getSpeaksByEthnicID(ethnic_id:number){
    return db.select().from(speaks).where(eq(speaks.ethnic_group_id, ethnic_id));
}

// u : update by hash
export async function updateSpeaksByEthnicID(id: number, updatedFields: Partial<typeof speaks.$inferInsert>) {
    return db
    .update(speaks)
    .set(updatedFields)
    .where(eq(speaks.ethnic_group_id, id));
}

// u : update by hash
export async function updateSpeaksByLanguageID(id: number, updatedFields: Partial<typeof speaks.$inferInsert>) {
    return db
    .update(speaks)
    .set(updatedFields)
    .where(eq(speaks.language_id, id));
}

// d : delete by id
export async function deleteArtifactByLanguageId(id : number){
    return db.delete(speaks).where(eq(speaks.language_id, id))
}

// d : delete by id
export async function deleteArtifactByEthnicId(id : number){
    return db.delete(speaks).where(eq(speaks.ethnic_group_id, id))
}

