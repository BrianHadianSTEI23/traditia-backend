import { db } from "../libs/supabase.js";
import { traditional_house } from "../libs/schema.js";
import type { TraditionalHouse } from "../types/traditional-house.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// Create
export async function createTraditionalHouse(e: TraditionalHouse) {
  return db.from('traditional_house').insert([e]);
}

// Read: Get all
export async function getAllTraditionalHouse() {
  return db.from('traditional_house').select('*');
}

// Read: Get by ID
export async function getTraditionalHouseByID(id: number) {
  return db.from('traditional_house').select('*').eq('id', id);
}

// Read: Get by Name
export async function getTraditionalHouseByName(name: string) {
  return db.from('traditional_house').select('*').eq('name', name);
}

// Update: By ID
export async function updateTraditionalHouseByID(id: number, updatedFields: Partial<TraditionalHouse>) {
  return db.from('traditional_house').update(updatedFields).eq('id', id);
}

// Delete: By ID
export async function deleteTraditionalHouseById(id: number) {
  return db.from('traditional_house').delete().eq('id', id);
}
