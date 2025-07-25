import { db } from "../libs/supabase.js";
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

// Create
export async function createArtifacts(ar: Artifact) {
  return db.from('artifacts').insert([ar]);
}

// Read: get all
export async function getAllArtifacts() {
  return db.from('artifacts').select('*');
}

// Read: get by ID
export async function getArtifactsById(id: number) {
  return db.from('artifacts').select('*').eq('id', id).single();
}

// Read: get by hash
export async function getArtifactsByHash(hash: string) {
  return db.from('artifacts').select('*').eq('hash', hash).maybeSingle();
}

// Read: get by createdAt date
export async function getArtifactByCreatedDate(date: Date) {
  return db.from('artifacts').select('*').eq('createdAt', date.toISOString());
}

// Update: by hash
export async function updateArtifactByHash(
  hash: string,
  updatedFields: Partial<Artifact>
) {
  return db.from('artifacts').update(updatedFields).eq('hash', hash);
}

// Delete: by hash
export async function deleteArtifactByHash(hash: string) {
  return db.from('artifacts').delete().eq('hash', hash);
}
