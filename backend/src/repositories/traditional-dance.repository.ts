import { db } from "../libs/supabase.js";
import { traditional_dance } from "../libs/schema.js";
import type { TraditionalDance } from "../types/traditional-dance.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// Create
export async function createTraditionalDance(e: TraditionalDance) {
  return db.from('traditional_dance').insert([e]);
}

// Read: Get all
export async function getAllTraditionalDance() {
  return db.from('traditional_dance').select('*');
}

// Read: Get by ID
export async function getTraditionalDanceByID(id: number) {
  return db.from('traditional_dance').select('*').eq('id', id);
}

// Read: Get by Ethnic Group ID
export async function getTraditionalDanceByEthnicID(id: number) {
  return db.from('traditional_dance').select('*').eq('ethnic_group_id', id);
}

// Update: By ID
export async function updateTraditionalDanceByID(id: number, updatedFields: Partial<TraditionalDance>) {
  return db.from('traditional_dance').update(updatedFields).eq('id', id);
}

// Update: By Ethnic Group ID
export async function updateTraditionalDanceByEthnicID(id: number, updatedFields: Partial<TraditionalDance>) {
  return db.from('traditional_dance').update(updatedFields).eq('ethnic_group_id', id);
}

// Delete: By ID
export async function deleteTraditionalDanceById(id: number) {
  return db.from('traditional_dance').delete().eq('id', id);
}

// Delete: By Ethnic Group ID
export async function deleteTraditionalDanceByEthnicId(id: number) {
  return db.from('traditional_dance').delete().eq('ethnic_group_id', id);
}
