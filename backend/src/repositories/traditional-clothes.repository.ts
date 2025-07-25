import { db } from "../libs/supabase.js";
import { traditional_clothes } from "../libs/schema.js";
import type { TraditionalClothes } from "../types/traditional-clothes.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// Create
export async function createTraditionalClothes(e: TraditionalClothes) {
  return db.from('traditional_clothes').insert([e]);
}

// Read: Get all
export async function getAllTraditionalClothes() {
  return db.from('traditional_clothes').select('*');
}

// Read: Get by ID
export async function getTraditionalClothesByID(id: number) {
  return db.from('traditional_clothes').select('*').eq('id', id);
}

// Update: By ID
export async function updateTraditionalClothesByID(id: number, updatedFields: Partial<TraditionalClothes>) {
  return db.from('traditional_clothes').update(updatedFields).eq('id', id);
}

// Delete: By ID
export async function deleteTraditionalClothesById(id: number) {
  return db.from('traditional_clothes').delete().eq('id', id);
}
