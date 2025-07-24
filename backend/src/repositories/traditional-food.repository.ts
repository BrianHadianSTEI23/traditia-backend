import { db } from "../libs/drizzle.js";
import { traditional_food } from "../libs/schema.js";
import type { TraditionalFood } from "../types/traditional-food.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// c
export async function createTraditionalFood(e:TraditionalFood){
    return db.insert(traditional_food).values(e);
}

// r : get all
export async function getAllTraditionalFood() {
    return db.select().from(traditional_food);
}

// r : get by food id
export async function getTraditionalFoodByID(id:number){
    return db.select().from(traditional_food).where(eq(traditional_food.id, id));
}

// u : update by hash
export async function updateTraditionalFoodByID(id: number, updatedFields: Partial<typeof traditional_food.$inferInsert>) {
    return db
    .update(traditional_food)
    .set(updatedFields)
    .where(eq(traditional_food.id, id));
}

// d : delete by id
export async function deleteArtifactById(id : number){
    return db.delete(traditional_food).where(eq(traditional_food.id, id))
}
