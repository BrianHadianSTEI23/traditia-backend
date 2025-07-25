import { db } from "../libs/supabase.js";
import { region } from "../libs/schema.js";
import type { Region } from "../types/region.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id, by name
 * u : update by food_id
 * d : delete by food_id
 */

// Create
export async function createRegion(e: Region) {
  return db.from('region').insert([e]);
}

// Read: get all
export async function getAllRegion() {
  return db.from('region').select('*');
}

// Read: get by ID
export async function getRegionByID(id: number) {
  return db.from('region').select('*').eq('id', id);
}

// Read: get by name
export async function getRegionByName(name: string) {
  return db.from('region').select('*').eq('name', name);
}

// Update: by ID
export async function updateRegionByID(id: number, updatedFields: Partial<Region>) {
  return db.from('region').update(updatedFields).eq('id', id);
}

// Delete: by ID
export async function deleteRegionById(id: number) {
  return db.from('region').delete().eq('id', id);
}
