import { db } from "../libs/drizzle.js";
import { traditional_clothes } from "../libs/schema.js";
import type { TraditionalClothes } from "../types/traditional-clothes.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// c
export async function createTraditionalClothes(e:TraditionalClothes){
    return db.insert(traditional_clothes).values(e);
}

// r : get all
export async function getAllTraditionalClothes() {
    return db.select().from(traditional_clothes);
}

// r : get by food id
export async function getTraditionalClothesByID(id:number){
    return db.select().from(traditional_clothes).where(eq(traditional_clothes.id, id));
}

// u : update by hash
export async function updateTraditionalClothesByID(id: number, updatedFields: Partial<typeof traditional_clothes.$inferInsert>) {
    return db
    .update(traditional_clothes)
    .set(updatedFields)
    .where(eq(traditional_clothes.id, id));
}

// d : delete by id
export async function deleteArtifactById(id : number){
    return db.delete(traditional_clothes).where(eq(traditional_clothes.id, id))
}
