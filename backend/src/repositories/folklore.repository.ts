import { db } from "../libs/supabase.js";
import { folklore } from "../libs/schema.js";
import type { Folklore } from "../types/folklore.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by id, get by ethnic id
 * u : update by id, by ethnic id
 * d : delete by id, by ethnic id
 */

// Create
export async function createFolklore(f: Folklore) {
  return db.from('folklore').insert([f]);
}

// Read: get all
export async function getAllFolklore() {
  return db.from('folklore').select('*');
}

// Read: get by ID
export async function getByFolkloreByID(id: number) {
  return db.from('folklore').select('*').eq('id', id);
}

// Read: get by ethnic_group_id
export async function getFolkloreByEthnicID(id: number) {
  return db.from('folklore').select('*').eq('ethnic_group_id', id);
}

// Update: by ID
export async function updateFolkloreById(
  id: number,
  updatedFields: Partial<Folklore>
) {
  return db.from('folklore').update(updatedFields).eq('id', id);
}

// Update: by ethnic_group_id
export async function updateFolkloreByEthnicID(
  id: number,
  updatedFields: Partial<Folklore>
) {
  return db.from('folklore').update(updatedFields).eq('ethnic_group_id', id);
}

// Delete: by ID
export async function deleteById(id: number) {
  return db.from('folklore').delete().eq('id', id);
}

// Delete: by ethnic_group_id
export async function deleteByEthnicId(id: number) {
  return db.from('folklore').delete().eq('ethnic_group_id', id);
}

