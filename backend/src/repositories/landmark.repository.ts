import { db } from "../libs/drizzle.js";
import { landmark } from "../libs/schema.js";
import type { Landmark } from "../types/landmark.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id, get by name
 * u : update by id, by name
 * d : delete by id
 */

// c
export async function createLandmark(l: Landmark){
    return db.insert(landmark).values(l);
}

// r : get all
export async function getAllLandmark() {
    return db.select().from(landmark);
}

// r : get by hash
export async function getByLandmarkByID(id:number){
    return db.select().from(landmark).where(eq(landmark.id, id));
}

// r : get b date created at
export async function getLandmarkByName(name : string){
    return db.select().from(landmark).where(eq(landmark.name, name))
}

// u : update by hash
export async function updateLandmarkById(id: number, updatedFields: Partial<typeof landmark.$inferInsert>) {
  return db
    .update(landmark)
    .set(updatedFields)
    .where(eq(landmark.id, id));
}

// u : update by hash
export async function updateLandmarkByEthnicID(name: string, updatedFields: Partial<typeof landmark.$inferInsert>) {
  return db
    .update(landmark)
    .set(updatedFields)
    .where(eq(landmark.name, name));
}

// d : delete by name
export async function deleteById(id : number){
    return db.delete(landmark).where(eq(landmark.id, id))
}
