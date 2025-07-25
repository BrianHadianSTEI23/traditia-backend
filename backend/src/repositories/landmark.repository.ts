import { db } from "../libs/supabase.js";
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

// Create
export async function createLandmark(l: Landmark) {
  return db.from('landmark').insert([l]);
}

// Read: get all
export async function getAllLandmark() {
  return db.from('landmark').select('*');
}

// Read: get by ID
export async function getByLandmarkByID(id: number) {
  return db.from('landmark').select('*').eq('id', id);
}

// Read: get by name
export async function getLandmarkByName(name: string) {
  return db.from('landmark').select('*').eq('name', name);
}

// Update: by ID
export async function updateLandmarkById(id: number, updatedFields: Partial<Landmark>) {
  return db.from('landmark').update(updatedFields).eq('id', id);
}

// Update: by name
export async function updateLandmarkByEthnicID(name: string, updatedFields: Partial<Landmark>) {
  return db.from('landmark').update(updatedFields).eq('name', name);
}

// Delete: by ID
export async function deleteById(id: number) {
  return db.from('landmark').delete().eq('id', id);
}
