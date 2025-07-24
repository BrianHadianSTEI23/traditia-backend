import { db } from "../libs/drizzle.js";
import { traditional_class } from "../libs/schema.js";
import type { TraditionalClass } from "../types/tradition-class.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id
 * u : update by id
 * d : delete by id
 */

// c
export async function createTraditionalClass(e:TraditionalClass){
    return db.insert(traditional_class).values(e);
}

// r : get all
export async function getAllTraditionalClass() {
    return db.select().from(traditional_class);
}

// r : get by food id
export async function getTraditionalClassByID(id:number){
    return db.select().from(traditional_class).where(eq(traditional_class.id, id));
}

// u : update by hash
export async function updateTraditionalClassByID(id: number, updatedFields: Partial<typeof traditional_class.$inferInsert>) {
    return db
    .update(traditional_class)
    .set(updatedFields)
    .where(eq(traditional_class.id, id));
}

// d : delete by id
export async function deleteArtifactById(id : number){
    return db.delete(traditional_class).where(eq(traditional_class.id, id))
}

