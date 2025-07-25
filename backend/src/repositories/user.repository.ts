import { db } from "../libs/supabase.js";
import { user } from "../libs/schema.js";
import type { User } from "../types/user.type.js";
import { eq } from "drizzle-orm";

// crud 
/**
 * c : push into db
 * r : get all, get by food_id, email
 * u : update by food_id, email
 * d : delete by food_id, email
 */

// Create
export async function createUser(e: User) {
  return db.from('user').insert([e]);
}

// Read: Get all
export async function getAllUser() {
  return db.from('user').select('*');
}

// Read: Get by ID
export async function getUserByID(id: number) {
  return db.from('user').select('*').eq('id', id);
}

// Read: Get by Email
export async function getUserByEmail(e: string) {
  return db.from('user').select('*').eq('email', e);
}

// Update: By ID
export async function updateUserByID(id: number, updatedFields: Partial<User>) {
  return db.from('user').update(updatedFields).eq('id', id);
}

// Update: By Email
export async function updateUserByEmail(email: string, updatedFields: Partial<User>) {
  return db.from('user').update(updatedFields).eq('email', email);
}

// Delete: By ID
export async function deleteUserById(id: number) {
  return db.from('user').delete().eq('id', id);
}

// Delete: By Email
export async function deleteUserByEmail(email: string) {
  return db.from('user').delete().eq('email', email);
}
