import { db } from "../libs/drizzle.js";
import { tradition } from "../libs/schema.js";
import type { Traditon } from "../types/tradition.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// c
export async function createTradition(e:Traditon){
    return db.insert(tradition).values(e);
}

// r : get all
export async function getAllTraditon() {
    return db.select().from(tradition);
}

// r : get by food id
export async function getTraditonById(id:number){
    return db.select().from(tradition).where(eq(tradition.id, id));
}

// r : get by food id
export async function getTraditonByName(name:string){
    return db.select().from(tradition).where(eq(tradition.name, name));
}

// u : update by hash
export async function updateTraditonByID(id: number, updatedFields: Partial<typeof tradition.$inferInsert>) {
    return db
    .update(tradition)
    .set(updatedFields)
    .where(eq(tradition.id, id));
}

// u : update by hash
export async function updateTraditonByName(name: string, updatedFields: Partial<typeof tradition.$inferInsert>) {
    return db
    .update(tradition)
    .set(updatedFields)
    .where(eq(tradition.name, name));
}

// d : delete by id
export async function deleteTraditionById(id : number){
    return db.delete(tradition).where(eq(tradition.id, id))
}

// d : delete by id
export async function deleteTraditionByName(name : string){
    return db.delete(tradition).where(eq(tradition.name, name))
}

