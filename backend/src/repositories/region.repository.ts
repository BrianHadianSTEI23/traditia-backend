import { db } from "../libs/drizzle.js";
import { region } from "../libs/schema.js";
import type { Region } from "../types/region.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id, by name
 * u : update by food_id
 * d : delete by food_id
 */

// c
export async function createRegion(e:Region){
    return db.insert(region).values(e);
}

// r : get all
export async function getAllRegion() {
    return db.select().from(region);
}

// r : get by food id
export async function getRegionByID(id:number){
    return db.select().from(region).where(eq(region.id, id));
}

// r : get by food id
export async function getRegionByName(name:string){
    return db.select().from(region).where(eq(region.name, name));
}

// u : update by hash
export async function updateRegionByID(id: number, updatedFields: Partial<typeof region.$inferInsert>) {
    return db
    .update(region)
    .set(updatedFields)
    .where(eq(region.id, id));
}

// d : delete by id
export async function deleteRegionById(id : number){
    return db.delete(region).where(eq(region.id, id))
}
