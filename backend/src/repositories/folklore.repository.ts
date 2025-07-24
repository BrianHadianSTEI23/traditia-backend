import { db } from "../libs/drizzle.js";
import { folklore } from "../libs/schema.js";
import type { Folklore } from "../types/folklore.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id, get by ethnic id
 * u : update by id, by ethnic id
 * d : delete by id, by ethnic id
 */

// c
export async function createFolklore(f: Folklore){
    return db.insert(folklore).values(f);
}

// r : get all
export async function getAllFolklore() {
    return db.select().from(folklore);
}

// r : get by hash
export async function getByFolkloreByID(id:number){
    return db.select().from(folklore).where(eq(folklore.id, id));
}

// r : get b date created at
export async function getFolkloreByEthnicID(id : number){
    return db.select().from(folklore).where(eq(folklore.ethnic_group_id, id))
}

// u : update by hash
export async function updateFolkloreById(id: number, updatedFields: Partial<typeof folklore.$inferInsert>) {
  return db
    .update(folklore)
    .set(updatedFields)
    .where(eq(folklore.id, id));
}

// u : update by hash
export async function updateFolkloreByEthnicID(id: number, updatedFields: Partial<typeof folklore.$inferInsert>) {
  return db
    .update(folklore)
    .set(updatedFields)
    .where(eq(folklore.ethnic_group_id, id));
}

// d : delete by name
export async function deleteById(id : number){
    return db.delete(folklore).where(eq(folklore.id, id))
}

export async function deleteByEthnicId(id : number){
    return db.delete(folklore).where(eq(folklore.ethnic_group_id, id))
}

