import { db } from "../libs/drizzle.js";
import { traditional_dance } from "../libs/schema.js";
import type { TraditionalDance } from "../types/traditional-dance.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// c
export async function createTraditionalDance(e:TraditionalDance){
    return db.insert(traditional_dance).values(e);
}

// r : get all
export async function getAllTraditionalDance() {
    return db.select().from(traditional_dance);
}

// r : get by food id
export async function getTraditionalDanceByID(id:number){
    return db.select().from(traditional_dance).where(eq(traditional_dance.id, id));
}

// r : get by food id
export async function getTraditionalDanceByEthnicID(id:number){
    return db.select().from(traditional_dance).where(eq(traditional_dance.ethnic_group_id, id));
}

// u : update by hash
export async function updateTraditionalDanceByID(id: number, updatedFields: Partial<typeof traditional_dance.$inferInsert>) {
    return db
    .update(traditional_dance)
    .set(updatedFields)
    .where(eq(traditional_dance.id, id));
}

export async function updateTraditionalDanceByEthnicID(id: number, updatedFields: Partial<typeof traditional_dance.$inferInsert>) {
    return db
    .update(traditional_dance)
    .set(updatedFields)
    .where(eq(traditional_dance.ethnic_group_id, id));
}

// d : delete by id
export async function deleteArtifactById(id : number){
    return db.delete(traditional_dance).where(eq(traditional_dance.id, id))
}

// d : delete by id
export async function deleteArtifactByEthnicId(id : number){
    return db.delete(traditional_dance).where(eq(traditional_dance.ethnic_group_id, id))
}
