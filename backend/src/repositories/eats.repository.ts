import { db } from "../libs/supabase.js";
import { eats } from "../libs/schema.js";
import type { Eats } from "../types/eats.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// Create
export async function createEats(e: Eats) {
  return db.from('eats').insert([e]);
}

// Read: get all
export async function getAllEats() {
  return db.from('eats').select('*');
}

// Read: get by food ID
export async function getEatsByFoodID(id: number) {
  return db.from('eats').select('*').eq('traditional_food_id', id);
}

// Read: get by ethnic ID
export async function getEatsByEthnicID(ethnic_id: number) {
  return db.from('eats').select('*').eq('ethnic_group_id', ethnic_id);
}

// Update: by ethnic_group_id
export async function updateEatsByEthnicID(
  id: number,
  updatedFields: Partial<Eats>
) {
  return db.from('eats').update(updatedFields).eq('ethnic_group_id', id);
}

// Update: by traditional_food_id
export async function updateEatsByFoodID(
  id: number,
  updatedFields: Partial<Eats>
) {
  return db.from('eats').update(updatedFields).eq('traditional_food_id', id);
}

// Delete: by traditional_food_id
export async function deleteEatsByFoodId(id: number) {
  return db.from('eats').delete().eq('traditional_food_id', id);
}

// Delete: by ethnic_group_id
export async function deleteEatsByEthnicId(id: number) {
  return db.from('eats').delete().eq('ethnic_group_id', id);
}
