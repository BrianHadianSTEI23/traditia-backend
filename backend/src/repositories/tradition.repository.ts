import { db } from "../libs/supabase.js";
import { tradition } from "../libs/schema.js";
import type { Traditon } from "../types/tradition.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// Create
export async function createTradition(e: Traditon) {
  return db.from('tradition').insert([e]);
}

// Read: get all
export async function getAllTraditon() {
  return db.from('tradition').select('*');
}

// Read: get by ID
export async function getTraditonById(id: number) {
  return db.from('tradition').select('*').eq('id', id);
}

// Read: get by Name
export async function getTraditonByName(name: string) {
  return db.from('tradition').select('*').eq('name', name);
}

// Update: by ID
export async function updateTraditonByID(id: number, updatedFields: Partial<Traditon>) {
  return db.from('tradition').update(updatedFields).eq('id', id);
}

// Update: by Name
export async function updateTraditonByName(name: string, updatedFields: Partial<Traditon>) {
  return db.from('tradition').update(updatedFields).eq('name', name);
}

// Delete: by ID
export async function deleteTraditionById(id: number) {
  return db.from('tradition').delete().eq('id', id);
}

// Delete: by Name
export async function deleteTraditionByName(name: string) {
  return db.from('tradition').delete().eq('name', name);
}
