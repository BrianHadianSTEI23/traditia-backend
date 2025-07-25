import { db } from "../libs/supabase.js";
import { traditional_song } from "../libs/schema.js";
import type { TraditionalSong } from "../types/traditional-song.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id,
 * u : update by food_id
 * d : delete by food_id
 */

// Create
export async function createTraditionalSong(e: TraditionalSong) {
  return db.from('traditional_song').insert([e]);
}

// Read: Get all
export async function getAllTraditionalSong() {
  return db.from('traditional_song').select('*');
}

// Read: Get by ID
export async function getTraditionalSongByID(id: number) {
  return db.from('traditional_song').select('*').eq('id', id);
}

// Update: By ID
export async function updateTraditionalSongByID(id: number, updatedFields: Partial<TraditionalSong>) {
  return db.from('traditional_song').update(updatedFields).eq('id', id);
}

// Delete: By ID
export async function deleteTraditionalSongById(id: number) {
  return db.from('traditional_song').delete().eq('id', id);
}
