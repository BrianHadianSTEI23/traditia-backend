import { db } from "../libs/drizzle.js";
import { artifacts, artifacts_type } from "../libs/schema.js";
import type { ArtifactType } from "../types/artifacts-type.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id
 * u : update by id
 * d : delete by id
 */

// c
export async function createArtifactType(ar: ArtifactType){
    return db.insert(artifacts_type).values(ar);
}

// r : get all
export async function getAllArtifactType() {
    return db.select().from(artifacts_type);
}

// r : get by id
export async function getArtifactTypeById(id:number){
    return db.select().from(artifacts_type).where(eq(artifacts_type.id, id));
}

// u : update by id
export async function updateArtifactTypeByID(id: number, updatedFields: Partial<typeof artifacts_type.$inferInsert>) {
  return db
    .update(artifacts_type)
    .set(updatedFields)
    .where(eq(artifacts.id, id));
}

// d : delete by id
export async function deleteArtifactTypeById(id : number){
    return db.delete(artifacts_type).where(eq(artifacts.id, id))
}

