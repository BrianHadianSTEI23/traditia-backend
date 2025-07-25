import { db } from "../libs/supabase.js";
import { speaks } from "../libs/schema.js";
import type { Speaks } from "../types/speaks.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// Create
export async function createSpeaks(e: Speaks) {
  return db.from('speaks').insert([e]);
}

// Read: get all
export async function getAllSpeaks() {
  return db.from('speaks').select('*');
}

// Read: by language_id
export async function getSpeaksByLanguageID(id: number) {
  return db.from('speaks').select('*').eq('language_id', id);
}

// Read: by ethnic_group_id
export async function getSpeaksByEthnicID(ethnic_id: number) {
  return db.from('speaks').select('*').eq('ethnic_group_id', ethnic_id);
}

// Update: by ethnic_group_id
export async function updateSpeaksByEthnicID(id: number, updatedFields: Partial<Speaks>) {
  return db.from('speaks').update(updatedFields).eq('ethnic_group_id', id);
}

// Update: by language_id
export async function updateSpeaksByLanguageID(id: number, updatedFields: Partial<Speaks>) {
  return db.from('speaks').update(updatedFields).eq('language_id', id);
}

// Delete: by language_id
export async function deleteArtifactByLanguageId(id: number) {
  return db.from('speaks').delete().eq('language_id', id);
}

// Delete: by ethnic_group_id
export async function deleteArtifactByEthnicId(id: number) {
  return db.from('speaks').delete().eq('ethnic_group_id', id);
}
