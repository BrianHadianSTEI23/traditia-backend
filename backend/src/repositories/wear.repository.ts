import { db } from "../libs/supabase.js";
import { wear } from "../libs/schema.js";
import type { Wear } from "../types/wear.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, get by ethnic_id
 * u : update by food_id, update by ethnic_id
 * d : delete by food_id, delete by ethnic_id
 */

// Create
export async function createWear(e: Wear) {
  const { data, error } = await db.from('wear').insert([e]).select();
  if (error) throw new Error(error.message);
  return data;
}

// Read: Get all
export async function getAllWear() {
  const { data, error } = await db.from('wear').select('*');
  if (error) throw new Error(error.message);
  return data;
}

// Read: Get by Traditional Clothes ID
export async function getWearByTraditionalClothesID(id: number) {
  const { data, error } = await db.from('wear').select('*').eq('traditional_clothes_id', id);
  if (error) throw new Error(error.message);
  return data;
}

// Read: Get by Ethnic Group ID
export async function getWearByEthnicID(ethnic_id: number) {
  const { data, error } = await db.from('wear').select('*').eq('ethnic_group_id', ethnic_id);
  if (error) throw new Error(error.message);
  return data;
}

// Update: By Ethnic Group ID
export async function updateWearByEthnicID(id: number, updatedFields: Partial<Wear>) {
  const { data, error } = await db.from('wear').update(updatedFields).eq('ethnic_group_id', id).select();
  if (error) throw new Error(error.message);
  return data;
}

// Update: By Traditional Clothes ID
export async function updateWearByTraditionalClothesID(id: number, updatedFields: Partial<Wear>) {
  const { data, error } = await db.from('wear').update(updatedFields).eq('traditional_clothes_id', id).select();
  if (error) throw new Error(error.message);
  return data;
}

// Delete: By Traditional Clothes ID
export async function deleteWearByTraditionalClothesId(id: number) {
  const { data, error } = await db.from('wear').delete().eq('traditional_clothes_id', id).select();
  if (error) throw new Error(error.message);
  return data;
}

// Delete: By Ethnic Group ID
export async function deleteWearByEthnicId(id: number) {
  const { data, error } = await db.from('wear').delete().eq('ethnic_group_id', id).select();
  if (error) throw new Error(error.message);
  return data;
}
