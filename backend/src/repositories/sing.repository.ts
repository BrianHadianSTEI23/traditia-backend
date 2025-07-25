import { db } from "../libs/supabase.js";
import { sings } from "../libs/schema.js";
import type { Sings } from "../types/sing.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// Create
export async function createSings(e: Sings) {
  return db.from('sings').insert([e]);
}

// Read: get all
export async function getAllSings() {
  return db.from('sings').select('*');
}

// Read: by traditional_song_id
export async function getSingsBySongID(id: number) {
  return db.from('sings').select('*').eq('traditional_song_id', id);
}

// Read: by ethnic_group_id
export async function getSingsByEthnicID(ethnic_id: number) {
  return db.from('sings').select('*').eq('ethnic_group_id', ethnic_id);
}

// Update: by ethnic_group_id
export async function updateSingsByEthnicID(id: number, updatedFields: Partial<Sings>) {
  return db.from('sings').update(updatedFields).eq('ethnic_group_id', id);
}

// Update: by traditional_song_id
export async function updateSingsByTraditionalHouseID(id: number, updatedFields: Partial<Sings>) {
  return db.from('sings').update(updatedFields).eq('traditional_song_id', id);
}

// Delete: by traditional_song_id
export async function deleteArtifactByTraditionalSongId(id: number) {
  return db.from('sings').delete().eq('traditional_song_id', id);
}

// Delete: by ethnic_group_id
export async function deleteArtifactByEthnicId(id: number) {
  return db.from('sings').delete().eq('ethnic_group_id', id);
}
