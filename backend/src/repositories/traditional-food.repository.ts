import { db } from "../libs/supabase.js";
import { traditional_food } from "../libs/schema.js";
import type { TraditionalFood } from "../types/traditional-food.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// Create
export async function createTraditionalFood(e: TraditionalFood) {
  return db.from('traditional_food').insert([e]);
}

// Read: Get all
export async function getAllTraditionalFood() {
  return db.from('traditional_food').select('*');
}

// Read: Get by ID
export async function getTraditionalFoodByID(id: number) {
  return db.from('traditional_food').select('*').eq('id', id);
}

// Update: By ID
export async function updateTraditionalFoodByID(id: number, updatedFields: Partial<TraditionalFood>) {
  return db.from('traditional_food').update(updatedFields).eq('id', id);
}

// Delete: By ID
export async function deleteTraditionalFoodById(id: number) {
  return db.from('traditional_food').delete().eq('id', id);
}
