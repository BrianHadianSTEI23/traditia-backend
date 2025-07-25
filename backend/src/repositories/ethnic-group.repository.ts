import { db } from "../libs/supabase.js";
import { ethnic_group } from "../libs/schema.js";
import type { EthnicGroup } from "../types/ethnic-group.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by name, get by region_id
 * u : update by name, by region id
 * d : delete by name
 */

// Create
export async function createEthnicGroup(eg: EthnicGroup) {
  return db.from('ethnic_group').insert([eg]);
}

// Read: get all
export async function getAllEthnicGroup() {
  return db.from('ethnic_group').select('*');
}

// Read: get by name
export async function getByEthnicGroupByName(name: string) {
  return db.from('ethnic_group').select('*').eq('name', name);
}

// Read: get by region_id
export async function getEthnicGroupByRegionID(id: number) {
  return db.from('ethnic_group').select('*').eq('region_id', id);
}

// Update: by name
export async function updateEthnicGroupByName(
  name: string,
  updatedFields: Partial<EthnicGroup>
) {
  return db.from('ethnic_group').update(updatedFields).eq('name', name);
}

// Update: by region_id (seems like you're updating by ID actually)
export async function updateEthnicGroupByRegionID(
  id: number,
  updatedFields: Partial<EthnicGroup>
) {
  return db.from('ethnic_group').update(updatedFields).eq('id', id);
}

// Delete: by name
export async function deleteEthnicGroupByName(name: string) {
  return db.from('ethnic_group').delete().eq('name', name);
}
