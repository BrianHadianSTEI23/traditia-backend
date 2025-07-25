import { db } from "../libs/supabase.js";
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
// Create
export async function createTraditionalClass(e: TraditionalClass) {
  return db.from('traditional_class').insert([e]);
}

// Read: get all
export async function getAllTraditionalClass() {
  return db.from('traditional_class').select('*');
}

// Read: get by ID
export async function getTraditionalClassByID(id: number) {
  return db.from('traditional_class').select('*').eq('id', id);
}

// Update: by ID
export async function updateTraditionalClassByID(id: number, updatedFields: Partial<TraditionalClass>) {
  return db.from('traditional_class').update(updatedFields).eq('id', id);
}

// Delete: by ID
export async function deleteArtifactById(id: number) {
  return db.from('traditional_class').delete().eq('id', id);
}
