import { db } from "../libs/drizzle.js";
import { ethnic_group } from "../libs/schema.js";
import type { EthnicGroup } from "../types/ethnic-group.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by name, get by region_id
 * u : update by name, by region id
 * d : delete by name
 */

// c
export async function createEthnicGroup(eg: EthnicGroup){
    return db.insert(ethnic_group).values(eg);
}

// r : get all
export async function getAllEthnicGroup() {
    return db.select().from(ethnic_group);
}

// r : get by hash
export async function getByEthnicGroupByName(name:string){
    return db.select().from(ethnic_group).where(eq(ethnic_group.name, name));
}

// r : get b date created at
export async function getEthnicGroupByRegionID(id : number){
    return db.select().from(ethnic_group).where(eq(ethnic_group.region_id, id))
}

// u : update by hash
export async function updateEthnicGroupByName(name: string, updatedFields: Partial<typeof ethnic_group.$inferInsert>) {
  return db
    .update(ethnic_group)
    .set(updatedFields)
    .where(eq(ethnic_group.name, name));
}

// u : update by hash
export async function updateEthnicGroupByRegionID(id: number, updatedFields: Partial<typeof ethnic_group.$inferInsert>) {
  return db
    .update(ethnic_group)
    .set(updatedFields)
    .where(eq(ethnic_group.id, id));
}

// d : delete by name
export async function deleteByName(name : string){
    return db.delete(ethnic_group).where(eq(ethnic_group.name, name))
}

