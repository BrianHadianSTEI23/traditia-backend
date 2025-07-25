import { db } from "../libs/supabase.js";
import type { ArtifactType } from "../types/artifacts-type.type.js";

// crud 
/**
 * c : push into db
 * r : get all, get by id
 * u : update by id
 * d : delete by id
 */

// c
export async function createArtifactType(ar: ArtifactType) {
  return await db
    .from('artifacts_type')
    .insert([ar]);
}

// r : get all
export async function getAllArtifactType() {
  return await db
    .from('artifacts_type')
    .select('*');
}

// r : get by id
export async function getArtifactTypeById(id: number) {
  return await db
    .from('artifacts_type')
    .select('*')
    .eq('id', id)
    .single(); // return one object instead of array
}

// u : update by id
export async function updateArtifactTypeByID(
  id: number,
  updatedFields: Partial<ArtifactType>
) {
  return await db
    .from('artifacts_type')
    .update(updatedFields)
    .eq('id', id);
}

// d : delete by id
export async function deleteArtifactTypeById(id: number) {
  return await db
    .from('artifacts_type')
    .delete()
    .eq('id', id);
}