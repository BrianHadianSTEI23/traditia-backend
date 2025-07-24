import { db } from "../libs/drizzle.js";
import { traditional_house } from "../libs/schema.js";
import type { TraditionalHouse } from "../types/traditional-house.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// c
export async function createTraditionalHouse(e:TraditionalHouse){
    return db.insert(traditional_house).values(e);
}

// r : get all
export async function getAllTraditionalHouse() {
    return db.select().from(traditional_house);
}

// r : get by food id
export async function getTraditionalHouseByID(id:number){
    return db.select().from(traditional_house).where(eq(traditional_house.id, id));
}

// u : update by hash
export async function updateTraditionalHouseByID(id: number, updatedFields: Partial<typeof traditional_house.$inferInsert>) {
    return db
    .update(traditional_house)
    .set(updatedFields)
    .where(eq(traditional_house.id, id));
}

// d : delete by id
export async function deleteArtifactById(id : number){
    return db.delete(traditional_house).where(eq(traditional_house.id, id))
}
