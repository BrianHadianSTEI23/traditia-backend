import { db } from "../libs/drizzle.js";
import { lives } from "../libs/schema.js";
import type { Lives } from "../types/lives.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// c
export async function createLives(e:Lives){
    return db.insert(lives).values(e);
}

// r : get all
export async function getAllLives() {
    return db.select().from(lives);
}

// r : get by food id
export async function getLivesByTraditionalHouseID(id:number){
    return db.select().from(lives).where(eq(lives.traditional_house_id, id));
}

// r : get by food id
export async function getLivesByEthnicID(ethnic_id:number){
    return db.select().from(lives).where(eq(lives.ethnic_group_id, ethnic_id));
}

// u : update by hash
export async function updateLivesByEthnicID(id: number, updatedFields: Partial<typeof lives.$inferInsert>) {
    return db
    .update(lives)
    .set(updatedFields)
    .where(eq(lives.ethnic_group_id, id));
}

// u : update by hash
export async function updateLivesByTraditionalHouseID(id: number, updatedFields: Partial<typeof lives.$inferInsert>) {
    return db
    .update(lives)
    .set(updatedFields)
    .where(eq(lives.traditional_house_id, id));
}

// d : delete by id
export async function deleteArtifactByTraditionalHouseId(id : number){
    return db.delete(lives).where(eq(lives.traditional_house_id, id))
}

// d : delete by id
export async function deleteArtifactByEthnicId(id : number){
    return db.delete(lives).where(eq(lives.ethnic_group_id, id))
}

