import { db } from "../libs/drizzle.js";
import { wear } from "../libs/schema.js";
import type { Wear } from "../types/wear.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// c
export async function createWear(e:Wear){
    return db.insert(wear).values(e);
}

// r : get all
export async function getAllWear() {
    return db.select().from(wear);
}

// r : get by food id
export async function getWearByTraditionalClothesID(id:number){
    return db.select().from(wear).where(eq(wear.traditional_clothes_id, id));
}

// r : get by food id
export async function getWearByEthnicID(ethnic_id:number){
    return db.select().from(wear).where(eq(wear.ethnic_group_id, ethnic_id));
}

// u : update by hash
export async function updateWearByEthnicID(id: number, updatedFields: Partial<typeof wear.$inferInsert>) {
    return db
    .update(wear)
    .set(updatedFields)
    .where(eq(wear.ethnic_group_id, id));
}

// u : update by hash
export async function updateWearByTraditionalClothesID(id: number, updatedFields: Partial<typeof wear.$inferInsert>) {
    return db
    .update(wear)
    .set(updatedFields)
    .where(eq(wear.traditional_clothes_id, id));
}

// d : delete by id
export async function deleteArtifactByTraditionalClothesId(id : number){
    return db.delete(wear).where(eq(wear.traditional_clothes_id, id))
}

// d : delete by id
export async function deleteArtifactByEthnicId(id : number){
    return db.delete(wear).where(eq(wear.ethnic_group_id, id))
}

