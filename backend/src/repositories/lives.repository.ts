import { db } from "../libs/supabase.js";
import { lives } from "../libs/schema.js";
import type { Lives } from "../types/lives.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// Create
export async function createLives(e: Lives) {
  return db.from('lives').insert([e]);
}

// Read: get all
export async function getAllLives() {
  return db.from('lives').select('*');
}

// Read: by traditional_house_id
export async function getLivesByTraditionalHouseID(id: number) {
  return db.from('lives').select('*').eq('traditional_house_id', id);
}

// Read: by ethnic_group_id
export async function getLivesByEthnicID(ethnic_id: number) {
  return db.from('lives').select('*').eq('ethnic_group_id', ethnic_id);
}

// Update: by ethnic_group_id
export async function updateLivesByEthnicID(id: number, updatedFields: Partial<Lives>) {
  return db.from('lives').update(updatedFields).eq('ethnic_group_id', id);
}

// Update: by traditional_house_id
export async function updateLivesByTraditionalHouseID(id: number, updatedFields: Partial<Lives>) {
  return db.from('lives').update(updatedFields).eq('traditional_house_id', id);
}

// Delete: by traditional_house_id
export async function deleteLivesByTraditionalHouseId(id: number) {
  return db.from('lives').delete().eq('traditional_house_id', id);
}

// Delete: by ethnic_group_id
export async function deleteLivesByEthnicId(id: number) {
  return db.from('lives').delete().eq('ethnic_group_id', id);
}
