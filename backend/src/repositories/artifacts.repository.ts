import { db } from "../libs/drizzle.js";
import { artifacts } from "../libs/schema.js";
import type { Artifact } from "../types/artifacts.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by hash, get by date created at
 * u : update by hash
 * d : delete by id
 */

// c
export async function createArtifacts(ar:Artifact){
    return db.insert(artifacts).values(ar);
}

// r : get all
export async function getAllArtifacts() {
    return db.select().from(artifacts);
}

// r : get by hash
export async function getArtifactsById(id:number){
    return db.select().from(artifacts).where(eq(artifacts.id, id));
}

// r : get by hash
export async function getArtifactsByHash(hash:string){
    return db.select().from(artifacts).where(eq(artifacts.hash, hash));
}

// r : get b date created at
export async function getArtifactByCreatedDate(date : Date){
    return db.select().from(artifacts).where(eq(artifacts.createdAt, date))
}

// u : update by hash
export async function updateArtifactByHash(hash: string, updatedFields: Partial<typeof artifacts.$inferInsert>) {
  return db
    .update(artifacts)
    .set(updatedFields)
    .where(eq(artifacts.hash, hash));
}

// d : delete by id
export async function deleteArtifactByHash(hash : string){
    return db.delete(artifacts).where(eq(artifacts.hash, hash))
}

