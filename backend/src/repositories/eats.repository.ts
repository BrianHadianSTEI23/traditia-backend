import { db } from "../libs/drizzle.js";
import { eats } from "../libs/schema.js";
import type { Eats } from "../types/eats.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// c
export async function createEats(e:Eats){
    return db.insert(eats).values(e);
}

// r : get all
export async function getAllEats() {
    return db.select().from(eats);
}

// r : get by food id
export async function getEatsByFoodID(id:number){
    return db.select().from(eats).where(eq(eats.traditional_food_id, id));
}

// r : get by food id
export async function getEatsByEthnicID(ethnic_id:number){
    return db.select().from(eats).where(eq(eats.ethnic_group_id, ethnic_id));
}

// u : update by hash
export async function updateEatsByEthnicID(id: number, updatedFields: Partial<typeof eats.$inferInsert>) {
    return db
    .update(eats)
    .set(updatedFields)
    .where(eq(eats.ethnic_group_id, id));
}

// u : update by hash
export async function updateEatsByFoodID(id: number, updatedFields: Partial<typeof eats.$inferInsert>) {
    return db
    .update(eats)
    .set(updatedFields)
    .where(eq(eats.traditional_food_id, id));
}

// d : delete by id
export async function deleteArtifactByFoodId(id : number){
    return db.delete(eats).where(eq(eats.traditional_food_id, id))
}

// d : delete by id
export async function deleteArtifactByEthnicId(id : number){
    return db.delete(eats).where(eq(eats.ethnic_group_id, id))
}

