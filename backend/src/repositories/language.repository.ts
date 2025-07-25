import { db } from "../libs/supabase.js";
import type { Language } from "../types/language.type.js";

// crud 
/**
 * c : push into db
 * r : get all, get by id, get by name
 * u : update by id
 * d : delete by id
 */

// Create
export async function createLanguage(f: Language) {
  return db.from('language').insert([f]);
}

// Read: get all
export async function getAllLanguage() {
  return db.from('language').select('*');
}

// Read: get by ID
export async function getByLanguageByID(id: number) {
  return db.from('language').select('*').eq('id', id);
}

// Read: get by name
export async function getLanguageByName(name: string) {
  return db.from('language').select('*').eq('name', name);
}

// Update: by ID
export async function updateLanguageById(id: number, updatedFields: Partial<Language>) {
  return db.from('language').update(updatedFields).eq('id', id);
}

// Delete: by ID
export async function deleteById(id: number) {
  return db.from('language').delete().eq('id', id);
}
